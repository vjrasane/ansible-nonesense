import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type {
  ModulePayload,
  TaskPayload,
  BackendResult,
  HostResult,
} from "../types.js";
import { Backend } from "../backend-context.js";

interface Payload {
  template: string;
  internal: Record<string, unknown>;
}

const PLACEHOLDER = "@@PARAMS@@";
const here = dirname(fileURLToPath(import.meta.url));

export interface AnsiballzBackendOptions {
  buildScript?: string;
  cacheDir?: string;
  uv?: string;
}

export class AnsiballzBackend extends Backend {
  private _buildScript: string;
  private _cacheDir: string;
  private _uv: string;
  private _mem = new Map<string, Payload>();

  constructor(opts: AnsiballzBackendOptions = {}) {
    super();
    this._buildScript =
      opts.buildScript ?? join(here, "../../scripts/build-payload.py");
    this._cacheDir =
      opts.cacheDir ?? join(here, "../../scripts/.ansiballz-cache");
    this._uv = opts.uv ?? "uv";
  }

  async executeTask(
    task: TaskPayload,
  ): Promise<BackendResult<Record<string, unknown>>> {
    const t = task as ModulePayload;
    // Generic path only for now; action-plugin dispatch hooks in here later.
    const result = await this._generic(t);
    return { [t.host.name]: result };
  }

  private async _generic(
    task: ModulePayload,
  ): Promise<HostResult<Record<string, unknown>>> {
    const payload = await this._payload(task.module);
    const script = render(payload, task.module, task.args, {
      check: task.check ?? false,
      diff: task.diff ?? false,
    });
    const { stdout } = await task.host.connection.exec(script, {
      become: task.become ?? false,
    });
    return toHostResult(parseResult(stdout));
  }

  // Build is the only place ansible-core runs; cached in memory and on disk.
  private async _payload(fqn: string): Promise<Payload> {
    const cached = this._mem.get(fqn);
    if (cached) return cached;

    const file = join(this._cacheDir, `${fqn}.json`);
    let payload: Payload;
    if (existsSync(file)) {
      payload = JSON.parse(readFileSync(file, "utf8"));
    } else {
      const out = await this._build(fqn);
      mkdirSync(this._cacheDir, { recursive: true });
      writeFileSync(file, out);
      payload = JSON.parse(out);
    }
    this._mem.set(fqn, payload);
    return payload;
  }

  private _build(fqn: string): Promise<string> {
    // Strip devenv's PYTHONPATH so uv's pinned ansible-core wins.
    const { PYTHONPATH: _drop, ...env } = process.env;
    return new Promise((resolve, reject) => {
      const child = spawn(this._uv, ["run", "--script", this._buildScript, fqn], {
        env,
      });
      let stdout = "";
      let stderr = "";
      child.stdout.on("data", (d) => (stdout += d));
      child.stderr.on("data", (d) => (stderr += d));
      child.on("error", reject);
      child.on("close", (code) =>
        code === 0
          ? resolve(stdout)
          : reject(new Error(`build ${fqn} failed (${code}):\n${stderr}`)),
      );
    });
  }
}

// Pure string work, done at call time.
function render(
  p: Payload,
  fqn: string,
  args: Record<string, unknown>,
  ctl: { check: boolean; diff: boolean },
): string {
  const merged = {
    ...p.internal,
    ...args,
    _ansible_module_name: fqn,
    _ansible_check_mode: ctl.check,
    _ansible_diff: ctl.diff,
  };
  const json = JSON.stringify({ ANSIBLE_MODULE_ARGS: merged });
  // JSON.stringify of a string is a valid Python string literal of that text.
  return p.template.replace(PLACEHOLDER, JSON.stringify(json));
}

function parseResult(stdout: string): Record<string, unknown> {
  const lines = stdout.trim().split("\n");
  for (let i = lines.length - 1; i >= 0; i--) {
    const l = lines[i].trim();
    if (l.startsWith("{")) {
      try {
        return JSON.parse(l);
      } catch {
        /* keep scanning */
      }
    }
  }
  throw new Error(`no JSON on stdout:\n${stdout}`);
}

function toHostResult(
  r: Record<string, unknown>,
): HostResult<Record<string, unknown>> {
  const data: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(r)) {
    if (!k.startsWith("_ansible_")) data[k] = v;
  }
  return { ...data, changed: Boolean(r.changed), failed: Boolean(r.failed) };
}
