import {
  type Options,
  type TaskOptions,
  type Host,
  type HostResult,
  TaskPayload,
  ModulePayload,
} from "./types.js";
import { dispatchTask } from "./backend-context.js";
import { _context } from "./context.js";

export async function executeTaskFn<TArgs, TReturn>(
  taskFn: (args: TArgs, opts?: TaskOptions) => Promise<HostResult<TReturn>>,
  taskArgs: TArgs,
  taskOpts?: TaskOptions,
  taskName?: string,
): Promise<HostResult<TReturn>> {
  const opts = _context.resolveOptions(taskOpts);

  const hostName = opts.host.name;
  const contextPath = _context.path;
  const taskPath = taskName ? [...contextPath, taskName] : contextPath;

  const callbackArgs = {
    host: hostName,
  };

  for (const cb of opts.callbacks) cb.onTaskStart?.(callbackArgs, taskPath);

  const payload = {
    host: opts.host,
    become: opts.become,
    check: opts.check,
    diff: opts.diff,
    extraVars: opts.extraVars,
    verbosity: opts.verbosity,
  };

  let hostResult: HostResult<TReturn>;
  try {
    hostResult = await taskFn(taskArgs, payload);
  } catch (error) {
    for (const cb of opts.callbacks)
      cb.onTaskError?.(error as Error, callbackArgs, taskPath);
    throw error;
  }

  for (const cb of opts.callbacks)
    cb.onTaskComplete?.(hostResult, callbackArgs, taskPath);

  if (!opts.continueOnError && hostResult.failed) {
    throw new Error(`Task ${taskName} failed on: ${hostName}`);
  }

  return hostResult;
}

export async function executeTask(
  moduleName: string,
  taskArgs: Record<string, unknown>,
  taskOpts?: TaskOptions,
  taskName?: string,
): Promise<HostResult<Record<string, unknown>>> {
  const taskFn = async (taskPayload: TaskPayload, taskOpts?: TaskOptions) => {
    const modulePayload = {
      ...taskPayload,
      module: moduleName,
    };
    const backendResult = await dispatchTask(_context.backend, payload);
    let hostResult = backendResult[payload.host.name];
    if (!hostResult) {
      const firstKey = Object.keys(backendResult)[0];
      hostResult = firstKey
        ? backendResult[firstKey]
        : { changed: false, failed: true };
    }
    return hostResult;
  };
  return executeTaskFn(taskFn, taskArgs, taskOpts, taskName ?? moduleName);
}

export const task = executeTask;

type RunFn = {
  <T>(fn: () => Promise<T>): Promise<T>;
  <T>(fn: () => Promise<T>, opts: Options): Promise<T>;
  <T>(opts: Options, fn: () => Promise<T>): Promise<T>;
};

export interface RunnableHost extends Host {
  run: RunFn & {
    (strings: TemplateStringsArray, ...values: unknown[]): RunFn;
  };
}

function resolveRunArgs(args: unknown[]): {
  opts: Options;
  fn: () => Promise<unknown>;
} {
  if (typeof args[0] === "function") {
    const opts =
      typeof args[1] === "object" && args[1] !== null
        ? (args[1] as Options)
        : {};
    return { fn: args[0] as () => Promise<unknown>, opts };
  }
  return { opts: args[0] as Options, fn: args[1] as () => Promise<unknown> };
}

export function host(h: Host, defaults?: Options): RunnableHost {
  function hostRun(...args: unknown[]): unknown {
    if (Array.isArray(args[0]) && "raw" in (args[0] as object)) {
      const name = String.raw(
        args[0] as unknown as TemplateStringsArray,
        ...args.slice(1),
      );
      return (...innerArgs: unknown[]) => {
        const { opts, fn } = resolveRunArgs(innerArgs);
        return _run(h, { ...defaults, ...opts }, fn, name);
      };
    }
    const { opts, fn } = resolveRunArgs(args);
    return _run(h, { ...defaults, ...opts }, fn);
  }

  return { ...h, run: hostRun as RunnableHost["run"] };
}

export const run: RunFn & {
  (strings: TemplateStringsArray, ...values: unknown[]): RunFn;
} = function run(...args: unknown[]): unknown {
  if (Array.isArray(args[0]) && "raw" in (args[0] as object)) {
    const name = String.raw(
      args[0] as unknown as TemplateStringsArray,
      ...args.slice(1),
    );
    return (...innerArgs: unknown[]) => {
      const { opts, fn } = resolveRunArgs(innerArgs);
      return _run(undefined, opts, fn, name);
    };
  }
  const { opts, fn } = resolveRunArgs(args);
  return _run(undefined, opts, fn);
} as typeof run;

type AsyncFn = (...args: any[]) => Promise<any>;

type WrapFn = {
  <F extends AsyncFn>(fn: F): (...args: Parameters<F>) => ReturnType<F>;
  <F extends AsyncFn>(
    opts: Options,
    fn: F,
  ): (...args: Parameters<F>) => ReturnType<F>;
};

export function define(
  strings: TemplateStringsArray,
  ...values: unknown[]
): WrapFn;
export function define<F extends AsyncFn>(
  fn: F,
): (...args: Parameters<F>) => ReturnType<F>;
export function define<F extends AsyncFn>(
  opts: Options,
  fn: F,
): (...args: Parameters<F>) => ReturnType<F>;
export function define(...args: unknown[]): unknown {
  if (Array.isArray(args[0]) && "raw" in (args[0] as object)) {
    const name = String.raw(
      args[0] as unknown as TemplateStringsArray,
      ...args.slice(1),
    );
    return (...defineArgs: unknown[]) => {
      const { opts, fn } = resolveDefineArgs(defineArgs);
      return (...callArgs: unknown[]) =>
        _run(undefined, opts, () => fn(...callArgs), name);
    };
  }
  const { opts, fn } = resolveDefineArgs(args);
  return (...callArgs: unknown[]) =>
    _run(undefined, opts, () => fn(...callArgs));
}

function resolveDefineArgs(args: unknown[]): { opts: Options; fn: AsyncFn } {
  if (typeof args[0] === "function") {
    return { fn: args[0] as AsyncFn, opts: {} };
  }
  return { opts: args[0] as Options, fn: args[1] as AsyncFn };
}

async function _run<T>(
  host: Host | undefined,
  options: Options,
  fn: () => Promise<T>,
  name?: string,
): Promise<T> {
  return _context.run({ host, path: name ? [name] : [], options }, fn);
}
