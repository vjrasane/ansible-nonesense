import type { TaskOptions, HostResult } from "./types.ts";
import { executeTask } from "./run.ts";

export interface ModuleFunction<TArgs, TReturn> {
  (args: TArgs, opts?: TaskOptions): Promise<HostResult<TReturn>>;
  (strings: TemplateStringsArray, ...values: unknown[]): (
    args: TArgs,
    opts?: TaskOptions,
  ) => Promise<HostResult<TReturn>>;
}

export function defineModule<TArgs, TReturn>(module: string): ModuleFunction<TArgs, TReturn> {
  function run(args: TArgs, opts?: TaskOptions): Promise<HostResult<TReturn>> {
    const result = executeTask(module, args as Record<string, unknown>, opts);
    return result as Promise<HostResult<TReturn>>;
  }

  function moduleFn(
    argsOrStrings: TArgs | TemplateStringsArray,
    ...rest: unknown[]
  ) {
    if (Array.isArray(argsOrStrings) && "raw" in argsOrStrings) {
      const name = String.raw(
        argsOrStrings as TemplateStringsArray,
        ...rest,
      );
      return (args: TArgs, opts?: TaskOptions) =>
        run(args, { ...opts, name });
    }
    return run(argsOrStrings as TArgs, rest[0] as TaskOptions | undefined);
  }

  return moduleFn as ModuleFunction<TArgs, TReturn>;
}
