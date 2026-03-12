import type { TaskOptions, HostResult } from "./types.ts";
import { executeTask } from "./run.ts";

export type ModuleFunction<TArgs, TReturn> = (
  args: TArgs,
  opts?: TaskOptions,
) => Promise<HostResult<TReturn>>;

export function defineModule<TArgs, TReturn>(module: string): ModuleFunction<TArgs, TReturn> {
  return async (args: TArgs, opts?: TaskOptions) => {
    const result = await executeTask(module, args as Record<string, unknown>, opts);
    return result as HostResult<TReturn>;
  };
}
