import { SpanEvent } from "src/span.ts";

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
        const message = `${e.host} ${e.name} ${e.status} (${e.ms}ms)`;
        const fields: Record<string, unknown> = {
          host: e.host,
          fqcn: e.name,
          status: e.status,
          changed: e.changed,
          ms: e.ms,
          ...(e.error && { error: e.error }),
        };
        return this.logger.log("info", message, fields);
      }
    }
  };
}

export const consoleLogger: Logger = {
  log: (l, m, f) => console[l === "trace" ? "debug" : l](m, f ?? ""),
};

export function logReporter(logger: Logger): EventHandler {
  return new LogReporter(logger).report;
}
