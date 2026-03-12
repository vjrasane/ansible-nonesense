import { AsyncLocalStorage } from "node:async_hooks";
import type {
  Options,
  Callback,
  ExecutionBackend,
  TaskPayload,
  TaskResult,
} from "./types.ts";
import { LocalBackend } from "./backends/local.ts";
import { consoleCallback } from "./callbacks/console.ts";

const DEFAULTS: Required<Pick<Options, "hosts" | "callbacks">> & Options = {
  hosts: "localhost",
  callbacks: [consoleCallback],
};

let globalConfig: Options = {};
const runContext = new AsyncLocalStorage<Options>();

export function configure(opts: Options): void {
  globalConfig = { ...globalConfig, ...opts };
}

export function resolveOptions(perTask?: Options): Options & {
  hosts: string;
  callbacks: Callback[];
  backend: ExecutionBackend;
  inventory?: string;
} {
  const ctx = runContext.getStore() ?? {};

  const backend =
    perTask?.backend ??
    ctx.backend ??
    globalConfig.backend ??
    DEFAULTS.backend ??
    new LocalBackend();
  const callbacks =
    perTask?.callbacks ??
    ctx.callbacks ??
    globalConfig.callbacks ??
    DEFAULTS.callbacks;

  return {
    ...DEFAULTS,
    ...globalConfig,
    ...ctx,
    ...perTask,
    backend,
    callbacks,
  };
}

export async function executeTask(
  module: string,
  args: Record<string, unknown>,
  perTask?: Options,
): Promise<TaskResult<Record<string, unknown>>> {
  const opts = resolveOptions(perTask);

  for (const cb of opts.callbacks) cb.onTaskStart?.(module, args);

  const payload: TaskPayload = {
    module,
    args,
    hosts: opts.hosts,
    inventory: opts.inventory,
    connection: opts.connection,
    become: opts.become,
    check: opts.check,
    diff: opts.diff,
    extraVars: opts.extraVars,
    verbosity: opts.verbosity,
  };

  let result: TaskResult<Record<string, unknown>>;
  try {
    result = await opts.backend.execute(payload);
  } catch (error) {
    for (const cb of opts.callbacks) cb.onTaskError?.(module, error as Error);
    throw error;
  }

  for (const cb of opts.callbacks) cb.onTaskComplete?.(module, result);

  if (!opts.ignoreErrors) {
    const failed = Object.entries(result).filter(([, r]) => r.failed);
    if (failed.length > 0) {
      const hosts = failed.map(([h]) => h).join(", ");
      throw new Error(`Task ${module} failed on: ${hosts}`);
    }
  }

  return result;
}

export const task = executeTask;

export async function run<T>(opts: Options, fn: () => Promise<T>): Promise<T> {
  const parent = runContext.getStore() ?? {};
  return runContext.run({ ...parent, ...opts }, fn);
}

interface Compose {
  <TReturn>(fn: () => Promise<TReturn>): (opts?: Options) => Promise<TReturn>;
  <TReturn, TInput>(
    fn: (input: TInput) => Promise<TReturn>,
  ): (input: TInput, opts?: Options) => Promise<TReturn>;
}

export const compose: Compose = (fn: Function) => {
  return function (...args: any[]) {
    if (fn.length === 0) {
      const [opts] = args;
      return run(opts ?? {}, fn as any);
    }
    const [input, opts] = args;
    return run(opts ?? {}, () => (fn as any)(input));
  };
};
