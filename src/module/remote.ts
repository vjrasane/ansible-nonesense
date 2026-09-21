import { currentContext } from "src/context.ts";
import {
  getModuleFn,
  Module,
  ModuleError,
  ModuleExecOpts,
  ModuleFn,
  ModuleMeta,
  ModuleResult,
  ModuleSkippedResult,
  ModuleStatus,
  RawResult,
} from "./module.ts";
import { execPythonOnHost } from "src/host.ts";

const ANSIBLE_VERSION = "2.17.x"; // the generated version const

const SKIPPED_RESULT: ModuleSkippedResult<unknown> = {
  status: "skipped",
  changed: false,
  failed: false,
  skipped: true,
} as const;

export class TaskModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    public readonly fqcn: string,
    private readonly moduleFqn: string,
    private readonly meta: ModuleMeta,
    private readonly zipdata: string,
    private readonly deps: string[],
  ) {}

  async exec(
    name: string | undefined,
    args: TArgs,
    moduleOpts: ModuleExecOpts = {},
  ): Promise<ModuleResult<TReturn>> {
    const ctx = currentContext();
    const mergedOpts = { ...ctx.opts, ...moduleOpts };

    if (this.meta.actionPlugin)
      throw new Error(`${this.fqcn} action plugin not implemented`);
    if (this.meta.powershell)
      throw new Error(`${this.fqcn} powershell module not supported`);

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
        _ansible_module_name: this.fqcn.split(".").at(-1),
        _ansible_version: ANSIBLE_VERSION,
        _ansible_remote_tmp: "~/.ansible/tmp",
      },
    };
    const paramsJson = JSON.stringify(params);
    const paramsBase64 = Buffer.from(paramsJson, "utf-8").toString("base64");
    const wrapper = [
      "import base64, os, runpy, sys, tempfile, atexit, shutil",
      'tmp = tempfile.mkdtemp(prefix="ansiballz_")',
      "atexit.register(shutil.rmtree, tmp, ignore_errors=True)",
      'zp = os.path.join(tmp, "payload.zip")',
      'with open(zp, "wb") as f:',
      `    f.write(base64.b64decode("${this.zipdata}"))`,
      "sys.path.insert(0, zp)",
      "from ansible.module_utils import basic",
      `basic._ANSIBLE_ARGS = base64.b64decode("${paramsBase64}")`,
      `runpy.run_module("${this.moduleFqn}", run_name="__main__", alter_sys=True)`,
    ].join("\n");
    const raw: RawResult<TReturn> = await execPythonOnHost(ctx.host, wrapper);

    const failed = raw.failed === true;
    const skipped = raw.skipped === true;
    const changed = raw.changed === true;

    let status: ModuleStatus;
    if (failed) status = "failed";
    else if (skipped) status = "skipped";
    else if (changed) status = "changed";
    else status = "ok";

    switch (status) {
      case "failed":
        throw new ModuleError(this.fqcn, raw); // fail-fast; see note
      case "skipped":
        return { ...raw, ...SKIPPED_RESULT };
      default:
        return {
          ...raw,
          status,
          failed: false,
          skipped: false,
          changed,
        };
    }
  }
}

export function defineRemoteModule<TArgs extends Record<string, any>, TReturn>(
  fqcn: string,
  moduleFqn: string,
  meta: ModuleMeta,
  zipdata: string,
  deps: string[],
): ModuleFn<TArgs, TReturn> {
  const mod = new TaskModule<TArgs, TReturn>(
    fqcn,
    moduleFqn,
    meta,
    zipdata,
    deps,
  );

  return getModuleFn(fqcn, mod);
}
