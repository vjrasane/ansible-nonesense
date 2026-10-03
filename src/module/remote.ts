import { currentContext } from "src/core/context.ts";
import { CACHE } from "src/core/cache.ts";
import {
  AnsibleModuleMeta,
  getModuleFn,
  Module,
  ModuleError,
  ModuleExecOpts,
  ModuleFn,
  ModuleResult,
  ModuleSkippedResult,
  RawResult,
} from "src/module/module.ts";
import { execPythonOnHost } from "src/core/host.ts";
import { ArtifactFiles, ScaffoldFile } from "src/core/cache.ts";

const ANSIBLE_VERSION = "2.17.x"; // the generated version const

const SKIPPED_RESULT: ModuleSkippedResult<unknown> = {
  status: "skipped",
  changed: false,
  failed: false,
  skipped: true,
} as const;

export interface RemoteModuleSpec {
  fqcn: string;
  moduleFqn: string;
  sources: ArtifactFiles[];
  scaffold: ScaffoldFile[];
  markers: string[];
}

export class RemoteModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  private _payload: Promise<string> | null = null;

  constructor(
    private readonly spec: RemoteModuleSpec,
    public readonly meta: AnsibleModuleMeta,
  ) {}

  get displayName(): string {
    return this.meta.fqcn;
  }

  get payload(): Promise<string> {
    if (this._payload == null) this._payload = CACHE.buildPayload(this.spec);
    return this._payload;
  }

  async exec(
    _name: string | undefined,
    args: TArgs,
    moduleOpts: ModuleExecOpts = {},
  ): Promise<ModuleResult<TReturn>> {
    const ctx = currentContext();
    const mergedOpts = { ...ctx.opts, ...moduleOpts };

    if (this.meta.actionPlugin)
      throw new Error(`${this.meta.fqcn} action plugin not implemented`);
    if (this.meta.powershell)
      throw new Error(`${this.meta.fqcn} powershell module not supported`);

    if (
      mergedOpts.check &&
      this.meta.checkMode !== "full" &&
      this.meta.checkMode !== "partial"
    )
      return SKIPPED_RESULT;

    const a: Record<string, unknown> = { ...args };
    if (this.meta.rawParams && "cmd" in a) {
      a["_raw_params"] = a["cmd"];
      delete a["cmd"];
    }
    const params = {
      ANSIBLE_MODULE_ARGS: {
        ...a,
        _ansible_check_mode: mergedOpts.check ?? false,
        _ansible_diff: mergedOpts.diff ?? false,
        _ansible_no_log: mergedOpts.noLog ?? false,
        _ansible_verbosity: 0,
        _ansible_module_name: this.meta.fqcn.split(".").at(-1),
        _ansible_version: ANSIBLE_VERSION,
        _ansible_remote_tmp: "~/.ansible/tmp",
      },
    };
    const paramsJson = JSON.stringify(params);
    const paramsBase64 = Buffer.from(paramsJson, "utf-8").toString("base64");
    const zipdata = await this.payload;
    const wrapper = [
      "import base64, os, sys, tempfile, atexit, shutil",
      'tmp = tempfile.mkdtemp(prefix="ansiballz_")',
      "atexit.register(shutil.rmtree, tmp, ignore_errors=True)",
      'zp = os.path.join(tmp, "payload.zip")',
      'with open(zp, "wb") as f:',
      `    f.write(base64.b64decode("${zipdata}"))`,
      "sys.path.insert(0, zp)",
      "from ansible.module_utils._internal._ansiballz._loader import run_module",
      "run_module(",
      `    json_params=base64.b64decode("${paramsBase64}"),`,
      '    profile="legacy",',
      `    module_fqn="${this.spec.moduleFqn}",`,
      "    modlib_path=zp,",
      "    extensions={},",
      ")",
    ].join("\n");
    const raw: RawResult<TReturn> = await execPythonOnHost(ctx.host, wrapper, {
      become: mergedOpts.become,
    });

    return finalizeResult(this.meta.fqcn, raw, mergedOpts.ignoreErrors ?? false);
  }
}

// Maps a raw module result to a typed ModuleResult. A failed result throws
// (fail-fast) unless `ignoreErrors`, in which case it is returned so the caller
// can inspect rc/stdout — Ansible's `ignore_errors`.
export function finalizeResult<TReturn>(
  fqcn: string,
  raw: RawResult<TReturn>,
  ignoreErrors: boolean,
): ModuleResult<TReturn> {
  if (raw.failed === true) {
    if (!ignoreErrors) throw new ModuleError(fqcn, raw);
    return { ...raw, status: "failed", failed: true, skipped: false };
  }
  if (raw.skipped === true) return { ...raw, ...SKIPPED_RESULT };
  return {
    ...raw,
    status: raw.changed === true ? "changed" : "ok",
    failed: false,
    skipped: false,
    changed: raw.changed === true,
  };
}

export function defineRemoteModule<TArgs extends Record<string, any>, TReturn>(
  spec: RemoteModuleSpec,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn> {
  const mod = new RemoteModule<TArgs, TReturn>(spec, meta);
  return getModuleFn(mod);
}
