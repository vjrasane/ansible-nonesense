import type { Options, TaskResult } from "./types.ts";
import { executeTask } from "./run.ts";

export type ModuleFunction<TArgs, TReturn> = (
  args: TArgs,
  opts?: Options,
) => Promise<TaskResult<TReturn>>;

export function defineModule<TArgs, TReturn>(module: string): ModuleFunction<TArgs, TReturn> {
  return async (args: TArgs, opts?: Options) => {
    const result = await executeTask(module, args as Record<string, unknown>, opts);
    return result as TaskResult<TReturn>;
  };
}
