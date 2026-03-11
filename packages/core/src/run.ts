import { AsyncLocalStorage } from "node:async_hooks";
import type {
  Options,
  ExecutionBackend,
  TaskPayload,
  TaskResult,
} from "./types.ts";
import { LocalBackend } from "./backends/local.ts";

const DEFAULTS: Required<Pick<Options, "hosts">> & Options = {
  hosts: "localhost",
};

const runContext = new AsyncLocalStorage<Options>();

export function resolveOptions(
  perTask?: Options,
): Options & { hosts: string; inventory: string; backend: ExecutionBackend } {
  const ctx = runContext.getStore() ?? {};

  return {
    ...DEFAULTS,
    ...ctx,
    ...perTask,
    backend:
      perTask?.backend ?? ctx.backend ?? DEFAULTS.backend ?? new LocalBackend(),
  };
}

export async function executeTask(
  module: string,
  args: Record<string, unknown>,
  perTask?: Options,
): Promise<TaskResult<Record<string, unknown>>> {
  const opts = resolveOptions(perTask);

  const payload: TaskPayload = {
    module,
    args,
    hosts: opts.hosts,
    inventory: opts.inventory,
    become: opts.become,
    check: opts.check,
    diff: opts.diff,
    extraVars: opts.extraVars,
    verbosity: opts.verbosity,
  };

  return opts.backend.execute(payload);
}

export async function play<T>(opts: Options, fn: () => Promise<T>): Promise<T> {
  return runContext.run(opts, fn);
}
