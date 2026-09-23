import { currentContext, currentRunner } from "src/context.ts";
import { ModuleError } from "./module/module.ts";

interface Span {
  kind: SpanKind;
  name: string;
  host: string;
  id?: string;
  parentId?: string;
}

export interface SpanStartEvent extends Span {
  phase: "start";
  at: number;
}

export interface SpanEndEvent extends Span {
  phase: "end";
  at: number;
  status: SpanStatus;
  result?: any;
  changed?: boolean;
  error?: SpanError;
  ms: number;
}

export type SpanEvent = SpanStartEvent | SpanEndEvent;

export type SpanKind = "host" | "step" | "connection";
export type SpanStatus =
  | "ok"
  | "changed"
  | "failed"
  | "skipped"
  | "unreachable";

export interface SpanError {
  message: string;
  stack?: string;
  result?: unknown;
}

export function toSpanError(e: unknown): SpanError {
  if (e instanceof ModuleError)
    return {
      message: e.message,
      result: e.result,
      stack: e.stack,
    };
  if (e instanceof Error)
    return {
      message: e.message,
      stack: e.stack,
    };
  return { message: String(e) };
}

export function emit(ev: SpanEvent) {
  const spanId = currentContext().spanId;
  currentRunner().emit({ ...ev, parentId: spanId });
}
