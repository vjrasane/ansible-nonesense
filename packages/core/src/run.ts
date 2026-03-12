import { AsyncLocalStorage } from "node:async_hooks";
import { writeFileSync, rmSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  type Options,
  type TaskOptions,
  type Host,
  type HostResult,
  type TaskPayload,
} from "./types.ts";
import { LocalBackend } from "./backends/local.ts";
import { consoleCallback } from "./callbacks/console.ts";

interface RunState {
  host?: Host;
  path: string[];
  options: Options;
}

const DEFAULT_HOST: Host = { name: "localhost", connection: "local" };
const DEFAULT_CALLBACKS = [consoleCallback];

let globalConfig: Options = {};
const runContext = new AsyncLocalStorage<RunState>();

export function configure(opts: Options): void {
  globalConfig = { ...globalConfig, ...opts };
}

interface ResolvedOptions extends Options {
  host: Host;
  backend: Required<Options>["backend"];
  callbacks: Required<Options>["callbacks"];
}

export function resolveOptions(perTask?: TaskOptions): ResolvedOptions {
  const state = runContext.getStore();
  const ctx = state?.options ?? {};

  const host = state?.host ?? DEFAULT_HOST;

  const backend =
    perTask?.backend ??
    ctx.backend ??
    globalConfig.backend ??
    new LocalBackend();
  const callbacks =
    perTask?.callbacks ??
    ctx.callbacks ??
    globalConfig.callbacks ??
    DEFAULT_CALLBACKS;

  return {
    ...globalConfig,
    ...ctx,
    ...perTask,
    host,
    backend,
    callbacks,
  };
}

export const context = {
  get host(): Host {
    return runContext.getStore()?.host ?? DEFAULT_HOST;
  },
  get path(): string[] {
    return runContext.getStore()?.path ?? [];
  },
  log(message: string): void {
    const opts = resolveOptions();
    for (const cb of opts.callbacks) cb.onMessage?.(opts.host.name, message, context.path);
  },
};

function resolveHost(host: Host): {
  inventory: string;
  tmpDir?: string;
} {
  if (!host.vars || Object.keys(host.vars).length === 0) {
    return { inventory: host.name + "," };
  }

  const inventoryData = {
    all: { hosts: { [host.name]: host.vars } },
  };

  const dir = mkdtempSync(join(tmpdir(), "nonesible-"));
  const path = join(dir, "inventory.json");
  writeFileSync(path, JSON.stringify(inventoryData));

  return { inventory: path, tmpDir: dir };
}

export async function executeTask(
  module: string,
  args: Record<string, unknown>,
  perTask?: TaskOptions,
  taskName?: string,
): Promise<HostResult<Record<string, unknown>>> {
  const opts = resolveOptions(perTask);

  const hostName = opts.host.name;
  const contextPath = context.path;
  const taskPath = taskName ? [...contextPath, taskName] : contextPath;

  for (const cb of opts.callbacks)
    cb.onTaskStart?.(hostName, module, args, taskPath);

  const hostInfo = resolveHost(opts.host);

  const payload: TaskPayload = {
    module,
    args,
    hosts: "all",
    inventory: hostInfo.inventory,
    connection: opts.host.connection,
    become: opts.become,
    check: opts.check,
    diff: opts.diff,
    extraVars: opts.extraVars,
    verbosity: opts.verbosity,
  };

  let hostResult: HostResult<Record<string, unknown>>;
  try {
    const backendResult = await opts.backend.execute(payload);
    hostResult = backendResult[hostName];
    if (!hostResult) {
      const firstKey = Object.keys(backendResult)[0];
      hostResult = firstKey
        ? backendResult[firstKey]
        : { changed: false, failed: true };
    }
  } catch (error) {
    for (const cb of opts.callbacks)
      cb.onTaskError?.(hostName, module, error as Error, taskPath);
    throw error;
  } finally {
    if (hostInfo.tmpDir) {
      rmSync(hostInfo.tmpDir, { recursive: true, force: true });
    }
  }

  for (const cb of opts.callbacks)
    cb.onTaskComplete?.(hostName, module, hostResult, taskPath);

  if (!opts.continueOnError && hostResult.failed) {
    throw new Error(`Task ${module} failed on: ${hostName}`);
  }

  return hostResult;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  h: Host | undefined,
  opts: Options,
  fn: () => Promise<T>,
  name?: string,
): Promise<T> {
  const parentState = runContext.getStore();
  const parentOpts = parentState?.options ?? {};
  const parentPath = parentState?.path ?? [];

  const state: RunState = {
    host: h ?? parentState?.host,
    path: name ? [...parentPath, name] : parentPath,
    options: { ...parentOpts, ...opts },
  };

  return runContext.run(state, () => fn());
}
