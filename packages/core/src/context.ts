import { AsyncLocalStorage } from "node:async_hooks";
import { ExecutionBackend, Host, Options, TaskOptions } from "./types.js";
import { LocalBackend } from "./backends/local.js";
import { localConnection } from "./connection.js";
import { consoleCallback } from "./callbacks/console.js";
import { backendContext } from "./backend-context.js";

interface RunState {
  host?: Host;
  path: string[];
  options: Options;
}

const DEFAULT_HOST: Host = { name: "localhost", connection: "local" };
const DEFAULT_CALLBACKS = [consoleCallback];

let _defaultBackend: LocalBackend | undefined;
function getDefaultBackend(): LocalBackend {
  return (_defaultBackend ??= new LocalBackend());
}

const runContext = new AsyncLocalStorage<RunState>();

export const _context = {
  get host(): Host {
    return runContext.getStore()?.host ?? DEFAULT_HOST;
  },
  get path(): string[] {
    return runContext.getStore()?.path ?? [];
  },
  get state(): RunState | undefined {
    return runContext.getStore();
  },
  get options(): Options {
    return runContext.getStore()?.options ?? {};
  },
  get callbacks(): Required<Options>["callbacks"] {
    return runContext.getStore()?.options?.callbacks ?? DEFAULT_CALLBACKS;
  },
  get backend(): ExecutionBackend {
    return backendContext.getStore() ?? getDefaultBackend();
  },
  run<T>(state: RunState, fn: () => Promise<T>): Promise<T> {
    return runContext.run(
      {
        ...state,
        host: state.host ?? _context.host,
        path: [..._context.path, ...state.path],
        options: { ..._context.options, ...state.options },
      },
      fn,
    );
  },
  resolveOptions(opts?: TaskOptions): ResolvedOptions {
    return {
      ..._context.options,
      ...opts,
      host: _context.host,
      callbacks: opts?.callbacks ?? _context.callbacks,
    };
  },
  log(message: string): void {
    const opts = _context.resolveOptions();
    for (const cb of opts.callbacks)
      cb.onMessage?.(message, { host: _context.host.name }, _context.path);
  },
} as const;

interface ResolvedOptions extends Options {
  host: Host;
  callbacks: Required<Options>["callbacks"];
}

interface Context {
  host: Host;
  log(message: string): void;
}

export const context: Context = _context;
