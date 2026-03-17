import type { TaskOptions, HostResult } from "./types.js";
import { executeTask } from "./run.js";

export interface ModuleFunction<TArgs, TReturn> {
  (args: TArgs, opts?: TaskOptions): Promise<HostResult<TReturn>>;
  (
    strings: TemplateStringsArray,
    ...values: unknown[]
  ): (args: TArgs, opts?: TaskOptions) => Promise<HostResult<TReturn>>;
}

export function defineModuleFn<TArgs, TReturn>(
  fn: (args: TArgs, opts?: TaskOptions) => TReturn,
): ModuleFunction<TArgs, TReturn> {
  function moduleFn(
    argsOrStrings: TArgs | TemplateStringsArray,
    ...rest: unknown[]
  ) {
    if (Array.isArray(argsOrStrings) && "raw" in argsOrStrings) {
      const name = String.raw(argsOrStrings as TemplateStringsArray, ...rest);
      return (args: TArgs, opts?: TaskOptions) =>
        executeTask(
          module,
          args as Record<string, unknown>,
          opts,
          name,
        ) as Promise<HostResult<TReturn>>;
    }
    return executeTask(
      module,
      argsOrStrings as Record<string, unknown>,
      rest[0] as TaskOptions | undefined,
    ) as Promise<HostResult<TReturn>>;
  }
  return moduleFn as ModuleFunction<TArgs, TReturn>;
}

export function defineModule<TArgs, TReturn>(
  module: string,
): ModuleFunction<TArgs, TReturn> {
  function moduleFn(
    argsOrStrings: TArgs | TemplateStringsArray,
    ...rest: unknown[]
  ) {
    if (Array.isArray(argsOrStrings) && "raw" in argsOrStrings) {
      const name = String.raw(argsOrStrings as TemplateStringsArray, ...rest);
      return (args: TArgs, opts?: TaskOptions) =>
        executeTask(
          module,
          args as Record<string, unknown>,
          opts,
          name,
        ) as Promise<HostResult<TReturn>>;
    }
    return executeTask(
      module,
      argsOrStrings as Record<string, unknown>,
      rest[0] as TaskOptions | undefined,
    ) as Promise<HostResult<TReturn>>;
  }

  return moduleFn as ModuleFunction<TArgs, TReturn>;
}
