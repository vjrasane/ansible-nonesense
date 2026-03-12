import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { writeFileSync, rmSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import type { Host, TaskPayload, BackendResult } from "../types.ts";
import { Backend } from "../backend-context.ts";

const exec = promisify(execFile);

const MIN_VERSION = [2, 17];

interface AnsibleJsonOutput {
  plays: Array<{
    tasks: Array<{
      hosts: Record<string, Record<string, unknown>>;
    }>;
  }>;
  stats: Record<string, { changed: number; failures: number }>;
}

async function checkAnsible(path: string): Promise<void> {
  let stdout: string;
  try {
    const result = await exec(path, ["--version"]);
    stdout = result.stdout;
  } catch {
    throw new Error(
      `ansible not found at "${path}". Install ansible-core >= ${MIN_VERSION.join(".")}:\n` +
        "  pip install ansible-core\n" +
        "  # or: apt install ansible-core / brew install ansible",
    );
  }

  const match = stdout.match(/ansible \[core (\d+)\.(\d+)/);
  if (!match) {
    throw new Error(
      `Could not determine ansible version from: ${stdout.split("\n")[0]}`,
    );
  }

  const major = parseInt(match[1]);
  const minor = parseInt(match[2]);
  if (
    major < MIN_VERSION[0] ||
    (major === MIN_VERSION[0] && minor < MIN_VERSION[1])
  ) {
    throw new Error(
      `ansible-core ${major}.${minor} is too old. Requires >= ${MIN_VERSION.join(".")}`,
    );
  }
}

class Semaphore {
  private _queue: (() => void)[] = [];
  private _active = 0;

  constructor(private _limit: number) {}

  async acquire(): Promise<void> {
    if (this._active < this._limit) {
      this._active++;
      return;
    }
    return new Promise<void>((resolve) => {
      this._queue.push(() => {
        this._active++;
        resolve();
      });
    });
  }

  release(): void {
    this._active--;
    this._queue.shift()?.();
  }
}

export interface LocalBackendOptions {
  ansible?: string;
  concurrency?: number;
}

export class LocalBackend extends Backend {
  private _checked: Promise<void> | undefined;
  private _ansible: string;
  private _semaphore: Semaphore;

  constructor(opts: LocalBackendOptions = {}) {
    super();
    this._ansible = opts.ansible ?? "ansible";
    this._semaphore = new Semaphore(opts.concurrency ?? 10);
  }

  async executeTask(
    task: TaskPayload,
  ): Promise<BackendResult<Record<string, unknown>>> {
    if (!this._checked) {
      this._checked = checkAnsible(this._ansible);
    }
    await this._checked;
    await this._semaphore.acquire();

    try {
      return await this._run(task);
    } finally {
      this._semaphore.release();
    }
  }

  private async _run(
    task: TaskPayload,
  ): Promise<BackendResult<Record<string, unknown>>> {
    const { inventory, tmpDir } = resolveHost(task.host);

    try {
      const args = [
        "all",
        "-m",
        task.module,
      ];

      if (Object.keys(task.args).length > 0) {
        args.push("-a", JSON.stringify(task.args));
      }

      args.push("-i", inventory);
      if (task.host.connection) args.push("--connection", task.host.connection);
      if (task.become) args.push("--become");
      if (task.check) args.push("--check");
      if (task.diff) args.push("--diff");

      if (task.extraVars) {
        args.push("-e", JSON.stringify(task.extraVars));
      }

      if (task.verbosity) {
        args.push(`-${"v".repeat(task.verbosity)}`);
      }

      const env = {
        ...process.env,
        ANSIBLE_LOAD_CALLBACK_PLUGINS: "true",
        ANSIBLE_STDOUT_CALLBACK: "json",
        ANSIBLE_DEPRECATION_WARNINGS: "false",
      };

      let stdout: string;
      try {
        const result = await exec(this._ansible, args, { env });
        stdout = result.stdout;
      } catch (err: unknown) {
        const e = err as { stdout?: string; stderr?: string; code?: number };
        if (e.stdout) {
          stdout = e.stdout;
        } else {
          throw new Error(
            `ansible failed (exit ${e.code}): ${e.stderr ?? "unknown error"}`,
          );
        }
      }

      return parseJsonOutput(stdout);
    } finally {
      if (tmpDir) {
        rmSync(tmpDir, { recursive: true, force: true });
      }
    }
  }
}

function resolveHost(host: Host): { inventory: string; tmpDir?: string } {
  if (!host.vars || Object.keys(host.vars).length === 0) {
    return { inventory: host.name + "," };
  }

  const inventoryData = {
    all: { hosts: { [host.name]: host.vars } },
  };

  const dir = mkdtempSync(join(tmpdir(), "nonesible-"));
  const path = join(dir, "inventory.json");
  writeFileSync(path, JSON.stringify(inventoryData));

  return { inventory: path, tmpDir: dir };
}

function parseJsonOutput(stdout: string): BackendResult<Record<string, unknown>> {
  const output: AnsibleJsonOutput = JSON.parse(stdout);

  const hostsData = output.plays?.[0]?.tasks?.[0]?.hosts ?? {};
  const result: BackendResult<Record<string, unknown>> = {};

  for (const [hostname, rawData] of Object.entries(hostsData)) {
    const data: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(rawData)) {
      if (!k.startsWith("_ansible_")) {
        data[k] = v;
      }
    }

    const stats = output.stats?.[hostname];
    result[hostname] = {
      ...data,
      changed: (data.changed as boolean) ?? (stats?.changed ?? 0) > 0,
      failed: (data.failed as boolean) ?? (stats?.failures ?? 0) > 0,
    };
  }

  return result;
}
