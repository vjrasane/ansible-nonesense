import { AsyncLocalStorage } from "node:async_hooks";
import { writeFileSync, rmSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  RUN_RESULT_BRAND,
  type Options,
  type TaskOptions,
  type Host,
  type Callback,
  type RunContext,
  type RunResult,
  type ExecutionBackend,
  type TaskPayload,
  type TaskResult,
} from "./types.ts";
import { LocalBackend } from "./backends/local.ts";
import { consoleCallback } from "./callbacks/console.ts";

interface RunState {
  options: Options;
  excluded: Set<string>;
}

const DEFAULTS: Required<Pick<Options, "hosts" | "callbacks">> & Options = {
  hosts: [{ name: "localhost" }],
  callbacks: [consoleCallback],
};

let globalConfig: Options = {};
const runContext = new AsyncLocalStorage<RunState>();

export function configure(opts: Options): void {
  globalConfig = { ...globalConfig, ...opts };
}

export function resolveOptions(perTask?: TaskOptions): Options & {
  hosts: Host[];
  callbacks: Callback[];
  backend: ExecutionBackend;
} {
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

function filterExcluded(hosts: Host[]): Host[] {
  const state = runContext.getStore();
  if (!state || state.excluded.size === 0) return hosts;
  return hosts.filter((h) => !state.excluded.has(h.name));
}

function resolveHosts(hosts: Host[]): {
  pattern: string;
  inventory?: string;
  tmpDir?: string;
} {
  if (hosts.length === 0) return { pattern: "all", inventory: "," };

  const hasVars = hosts.some((h) => h.vars && Object.keys(h.vars).length > 0);

  if (!hasVars) {
    return {
      pattern: "all",
      inventory: hosts.map((h) => h.name).join(",") + ",",
    };
  }

  const inventoryData: Record<
    string,
    Record<string, Record<string, unknown>>
  > = {
    all: { hosts: {} },
  };
  for (const host of hosts) {
    inventoryData.all.hosts[host.name] = host.vars ?? {};
  }

  const dir = mkdtempSync(join(tmpdir(), "nonesible-"));
  const path = join(dir, "inventory.json");
  writeFileSync(path, JSON.stringify(inventoryData));

  return { pattern: "all", inventory: path, tmpDir: dir };
}

export async function executeTask(
  module: string,
  args: Record<string, unknown>,
  perTask?: TaskOptions,
): Promise<TaskResult<Record<string, unknown>>> {
  const opts = resolveOptions(perTask);
  const activeHosts = filterExcluded(opts.hosts);

  if (activeHosts.length === 0) {
    return {};
  }

  for (const cb of opts.callbacks) cb.onTaskStart?.(module, args);

  const hostInfo = resolveHosts(activeHosts);

  const payload: TaskPayload = {
    module,
    args,
    hosts: hostInfo.pattern,
    inventory: hostInfo.inventory,
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
  } finally {
    if (hostInfo.tmpDir) {
      rmSync(hostInfo.tmpDir, { recursive: true, force: true });
    }
  }

  for (const cb of opts.callbacks) cb.onTaskComplete?.(module, result);

  if (!opts.continueOnError) {
    const failed = Object.entries(result).filter(([, r]) => r.failed);
    if (failed.length > 0) {
      const hosts = failed.map(([h]) => h).join(", ");
      throw new Error(`Task ${module} failed on: ${hosts}`);
    }
  }

  return result;
}

export const task = executeTask;

export async function run<T>(
  opts: Options,
  fn: (ctx: RunContext) => Promise<T>,
): Promise<RunResult<T>> {
  const parentState = runContext.getStore();
  const parentOpts = parentState?.options ?? {};
  const excluded = new Set<string>(parentState?.excluded);

  const state: RunState = {
    options: { ...parentOpts, ...opts },
    excluded,
  };

  const ctx: RunContext = {
    excludeFailed(result) {
      const hosts = RUN_RESULT_BRAND in result ? result.hosts : result;
      for (const [host, data] of Object.entries(hosts)) {
        if (data.failed) excluded.add(host);
      }
      return result;
    },
    getHosts() {
      const hosts = state.options.hosts ?? [];
      return hosts.filter((h) => !excluded.has(h.name)).map((h) => ({ ...h }));
    },
  };

  const value = await runContext.run(state, () => fn(ctx));

  const hosts: Record<string, { failed: boolean }> = {};
  for (const host of state.options.hosts ?? []) {
    hosts[host.name] = { failed: excluded.has(host.name) };
  }

  return { [RUN_RESULT_BRAND]: true as const, value, hosts };
}

interface Compose {
  <TReturn>(
    fn: (ctx: RunContext) => Promise<TReturn>,
  ): (opts?: TaskOptions) => Promise<RunResult<TReturn>>;
  <TReturn, TInput>(
    fn: (input: TInput, ctx: RunContext) => Promise<TReturn>,
  ): (input: TInput, opts?: TaskOptions) => Promise<RunResult<TReturn>>;
}

export const compose: Compose = (fn: Function) => {
  return function (...args: any[]) {
    if (fn.length <= 1) {
      const [opts] = args;
      return run(opts ?? {}, (ctx: RunContext) => (fn as any)(ctx));
    }
    const [input, opts] = args;
    return run(opts ?? {}, (ctx: RunContext) => (fn as any)(input, ctx));
  };
};
