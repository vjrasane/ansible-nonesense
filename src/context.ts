import { AsyncLocalStorage } from "node:async_hooks";
import { randomBytes, randomUUID } from "node:crypto";
import { localhost, type Host } from "src/host.ts";
import type { ModuleExecOpts } from "src/module/module.ts";
import {
  emit,
  SpanError,
  SpanKind,
  SpanStatus,
  toSpanError,
} from "src/span.ts";

export interface ExecContext {
  host: Host;
  opts: ModuleExecOpts;
  spanId?: string;
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

export const currentRunner = () => currentHost().runner;

export function withContext<T>(
  ctx: Partial<ExecContext>,
  fn: () => Promise<T>,
): Promise<T> {
  const p = currentContext();
  return storage.run({ ...p, ...ctx, opts: { ...p.opts, ...ctx.opts } }, fn);
}

export function withHost<T>(host: Host, fn: () => Promise<T>): Promise<T> {
  return withContext({ host }, fn);
}

export function withOptions<T>(
  opts: ModuleExecOpts,
  fn: () => Promise<T>,
): Promise<T> {
  return withContext({ opts }, fn);
}

export const become = <T>(fn: () => Promise<T>) =>
  withOptions({ become: true }, fn);
export const checkMode = <T>(fn: () => Promise<T>) =>
  withOptions({ check: true }, fn);
export const env = <T>(vars: Record<string, string>, fn: () => Promise<T>) =>
  withOptions({ env: vars }, fn);

function randomID() {
  return randomBytes(6).toString("hex");
}

export async function withSpan<
  TReturn extends { status?: SpanStatus; changed?: boolean },
>(kind: SpanKind, name: string, fn: () => Promise<TReturn>): Promise<TReturn> {
  const spanId = randomID();
  const base = {
    id: spanId,
    kind,
    name,
    host: currentHost().name,
    parentId: currentContext().spanId,
  };
  const start = Date.now();
  emit({ ...base, phase: "start", at: start });
  let status: SpanStatus = "ok";
  let result: TReturn | undefined;
  let changed: boolean | undefined;
  let error: SpanError | undefined;

  try {
    result = await withContext({ spanId }, fn);

    if (kind === "step") {
      status = result.status ?? status;
      changed = result.changed;
    }

    return result;
  } catch (e) {
    status = "failed";
    error = toSpanError(e);
    throw e;
  } finally {
    const end = Date.now();
    const ms = end - start;
    emit({
      ...base,
      phase: "end",
      status,
      error,
      changed,
      result,
      at: end,
      ms,
    });
  }
}
