export type ModuleStatus = "ok" | "changed" | "failed" | "skipped";

export type ModuleSkippedResult<TReturn> = Partial<TReturn> & {
  status: "skipped";
  changed: false;
  failed: false;
  skipped: true;
};

export type ModuleRanResult<TReturn> = RawResult<TReturn> & {
  status: Exclude<ModuleStatus, "skipped">;
  changed: boolean;
  failed: false;
  skipped: false;
};

export type RawResult<TReturn> = TReturn & {
  changed: boolean;
  failed: boolean;
  skipped: boolean;
  invocation: Record<string, unknown>;
  warnings?: string[];
};

export type ModuleResult<TReturn> =
  | ModuleRanResult<TReturn>
  | ModuleSkippedResult<TReturn>;

export class ModuleError extends Error {
  constructor(
    fdcn: string,
    public readonly result: RawResult<any>,
  ) {
    super(`Module ${fdcn} failed with result: ${JSON.stringify(result)}`);
  }
}

export interface ModuleMeta {
  actionPlugin: boolean;
  powershell: boolean;
  rawParams: boolean;
  checkMode: "full" | "partial" | "none" | "N/A";
}

export interface ModuleExecOpts {
  check?: boolean;
  diff?: boolean;
  noLog?: boolean;
  become?: boolean;
  env?: Record<string, string>;
}

export interface Module<TArgs extends Record<string, any>, TReturn> {
  exec(
    name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>>;
}

export type ModuleFn<TArgs, TReturn> = {} extends TArgs
  ? {
      (args?: TArgs, opts?: ModuleExecOpts): Promise<ModuleResult<TReturn>>;
      (
        name: string,
        args?: TArgs,
        opts?: ModuleExecOpts,
      ): Promise<ModuleResult<TReturn>>;
    }
  : {
      (args: TArgs, opts?: ModuleExecOpts): Promise<ModuleResult<TReturn>>;
      (
        name: string,
        args: TArgs,
        opts?: ModuleExecOpts,
      ): Promise<ModuleResult<TReturn>>;
    };

export function getModuleFn<TArgs extends Record<string, any>, TReturn>(
  mod: Module<TArgs, TReturn>,
) {
  function fn(
    a?: string | TArgs,
    b?: TArgs | ModuleExecOpts,
    c?: ModuleExecOpts,
  ) {
    const named = typeof a === "string";
    const name = named ? a : undefined;
    const args = (named ? b : a) as TArgs | undefined;
    const opts = (named ? c : b) as ModuleExecOpts | undefined;
    return mod.exec(name, (args ?? {}) as TArgs, opts ?? {});
  }
  return fn;
}
