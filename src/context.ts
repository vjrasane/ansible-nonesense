import { AsyncLocalStorage } from "node:async_hooks";
import { localhost, type Host } from "./host.ts";
import type { ModuleExecOpts } from "./module.ts";

interface ExecContext {
  host: Host;
  opts: ModuleExecOpts;
}

const storage = new AsyncLocalStorage<ExecContext>();

let defaultLocalContext: ExecContext | undefined;

export function currentContext(): ExecContext {
  const ctx = storage.getStore();
  if (ctx) return ctx;
  return (defaultLocalContext ??= {
    host: localhost,
    opts: {},
  });
}
export const currentHost = () => currentContext().host;

export function withHost<T>(host: Host, fn: () => Promise<T>): Promise<T> {
  return storage.run({ host, opts: {} }, fn);
}

export function withOptions<T>(
  opts: ModuleExecOpts,
  fn: () => Promise<T>,
): Promise<T> {
  const p = currentContext();
  return storage.run({ host: p.host, opts: { ...p.opts, ...opts } }, fn);
}

export const become = <T>(fn: () => Promise<T>) =>
  withOptions({ become: true }, fn);
export const checkMode = <T>(fn: () => Promise<T>) =>
  withOptions({ check: true }, fn);
export const env = <T>(vars: Record<string, string>, fn: () => Promise<T>) =>
  withOptions({ env: vars }, fn);
