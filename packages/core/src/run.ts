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
  options: Options;
}

const DEFAULTS: Required<Pick<Options, "host" | "callbacks">> & Options = {
  host: { name: "localhost", connection: "local" },
  callbacks: [consoleCallback],
};

let globalConfig: Options = {};
const runContext = new AsyncLocalStorage<RunState>();

export function configure(opts: Options): void {
  globalConfig = { ...globalConfig, ...opts };
}

export function resolveOptions(perTask?: TaskOptions): Required<Pick<Options, "host" | "callbacks" | "backend">> & Options {
  const state = runContext.getStore();
  const ctx = state?.options ?? {};

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
): Promise<HostResult<Record<string, unknown>>> {
  const opts = resolveOptions(perTask);

  const hostName = opts.host.name;
  const taskName = opts.name;
  for (const cb of opts.callbacks) cb.onTaskStart?.(hostName, module, args, taskName);

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
      hostResult = firstKey ? backendResult[firstKey] : { changed: false, failed: true };
    }
  } catch (error) {
    for (const cb of opts.callbacks) cb.onTaskError?.(hostName, module, error as Error, taskName);
    throw error;
  } finally {
    if (hostInfo.tmpDir) {
      rmSync(hostInfo.tmpDir, { recursive: true, force: true });
    }
  }

  for (const cb of opts.callbacks) cb.onTaskComplete?.(hostName, module, hostResult, taskName);

  if (!opts.continueOnError && hostResult.failed) {
    throw new Error(`Task ${module} failed on: ${hostName}`);
  }

  return hostResult;
}

export const task = executeTask;

export interface RunnableHost extends Host {
  run<T>(fn: () => Promise<T>, opts?: Options): Promise<T>;
}

export function host(h: Host, defaults?: Options): RunnableHost {
  return {
    ...h,
    run<T>(fn: () => Promise<T>, opts?: Options) {
      return _run({ ...defaults, ...opts, host: h }, fn);
    },
  };
}

async function _run<T>(
  opts: Options,
  fn: () => Promise<T>,
): Promise<T> {
  const parentState = runContext.getStore();
  const parentOpts = parentState?.options ?? {};

  const state: RunState = {
    options: { ...parentOpts, ...opts },
  };

  return runContext.run(state, () => fn());
}
