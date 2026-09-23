import { withOptions } from "src/context.ts";
import { host, HostConfig, HostRef } from "src/host.ts";
import { ModuleExecOpts } from "src/module/module.ts";
import { SpanEvent } from "src/span.ts";
import {
  consoleLogger,
  EventHandler,
  Logger,
  LogLevel,
  LogReporter,
  withLevel,
} from "src/reporter.ts";

interface RunnerOpts extends ModuleExecOpts {
  logLevel: LogLevel;
}

export class Runner {
  private reporter: LogReporter = new LogReporter(
    withLevel(consoleLogger, "info"),
  );

  constructor(
    private handler: EventHandler = this.defaultHandler,
    private opts: ModuleExecOpts = {},
  ) {}

  private defaultHandler = (e: SpanEvent) => {
    this.reporter.report(e);
  };

  run<T>(fn: () => Promise<T>): Promise<T> {
    return withOptions(this.opts, fn);
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
}

export let defaultRunner = new Runner();

export function setDefaultRunner(runner: Runner): void {
  defaultRunner = runner;
}
