import { withOptions } from "src/context.ts";
import { host, HostConfig, HostRef } from "src/host.ts";
import { ModuleExecOpts } from "src/module/module.ts";
import { SpanEvent } from "src/span.ts";
import {
  consoleLogger,
  EventHandler,
  Logger,
  LogReporter,
  withLevel,
} from "src/reporter.ts";
import { FatalError } from "./errors.ts";

export class Runner {
  private fatal: FatalError | null = null;

  private reporter: LogReporter = new LogReporter(
    withLevel(consoleLogger, "info"),
  );

  constructor(
    private opts: ModuleExecOpts = {},
    private handler: EventHandler = this.defaultHandler,
  ) {}

  private defaultHandler = (e: SpanEvent) => {
    this.reporter.report(e);
  };

  run<T>(fn: () => Promise<T>): Promise<T> {
    return withOptions(this.opts, async () => {
      try {
        const r = await fn();
        if (this.fatal) throw this.fatal;
        return r;
      } catch (e) {
        throw this.fatal ?? e;
      }
    });
  }

  host(name: string, cfg?: HostConfig): HostRef {
    return host(name, cfg, this);
  }

  emit(event: SpanEvent) {
    try {
      return this.handler(event);
    } catch (err) {
      console.error(`[reporter error] ${String(err)}`);
    }
  }

  setOpts(opts: ModuleExecOpts) {
    this.opts = opts;
  }

  setHandler(handler: EventHandler) {
    this.handler = handler;
  }

  setLogger(logger: Logger) {
    this.reporter = new LogReporter(logger);
  }

  setFatal(err: FatalError) {
    this.fatal = err;
  }
}

export let defaultRunner = new Runner();

export function setDefaultRunner(runner: Runner): void {
  defaultRunner = runner;
}
