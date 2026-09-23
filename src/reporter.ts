import { SpanEndEvent, SpanEvent } from "src/span.ts";

export type LogLevel = "trace" | "debug" | "info" | "warn" | "error";

export interface Logger {
  log(level: LogLevel, message: string, fields?: Record<string, unknown>): void;
}

export type EventHandler = (event: SpanEvent) => void;

export class LogReporter {
  constructor(private logger: Logger) {}

  report = (event: SpanEvent) => {
    switch (event.kind) {
      case "step":
        return this.reportStep(event);
    }
  };

  private reportStep = (e: SpanEvent) => {
    switch (e.phase) {
      case "start": {
        const message = `${e.host} ${e.name} ...`;
        const fields: Record<string, unknown> = {
          kind: e.kind,
          phase: e.phase,
          host: e.host,
          name: e.name,
        };
        return this.logger.log("info", message, fields);
      }
      case "end": {
        return this.reportResult(e);
      }
    }
  };

  private reportResult = (e: SpanEndEvent) => {
    const fields: Record<string, unknown> = {
      host: e.host,
      fqcn: e.name,
      status: e.status,
      changed: e.changed,
      ms: e.ms,
      ...(e.error && { error: e.error }),
    };
    const message = `${e.host} ${e.name} ${e.status} (${e.ms}ms)`;
    switch (e.status) {
      case "ok":
      case "changed":
      case "skipped":
        return this.logger.log("info", message, fields);
      case "failed":
      case "unreachable":
        return this.logger.log("error", message, fields);
    }
  };
}

export const consoleLogger: Logger = {
  log: (l, m, f) => console[l === "trace" ? "debug" : l](m, f ?? ""),
};

export function withLevel(inner: Logger, min: LogLevel): Logger {
  const order = { trace: 0, debug: 1, info: 2, warn: 3, error: 4 };
  return { log: (l, m, f) => order[l] >= order[min] && inner.log(l, m, f) };
}

export function logReporter(logger: Logger): EventHandler {
  return new LogReporter(logger).report;
}
