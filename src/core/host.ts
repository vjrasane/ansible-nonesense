import { ConnectionSpec, SSHConfig } from "src/core/connection.ts";
import { withContext } from "src/core/context.ts";
import { Runner, defaultRunner } from "src/core/runner.ts";

export interface HostRef {
  readonly name: string;
  run<T>(fn: () => Promise<T>): Promise<T>;
}

export class Host implements HostRef {
  constructor(
    public readonly name: string,
    public readonly connection: ConnectionSpec,
    public readonly _runner?: Runner,
  ) {}

  get runner(): Runner {
    return this._runner ?? defaultRunner;
  }

  run<T>(fn: () => Promise<T>): Promise<T> {
    return this.runner.run(() => withContext({ host: this, opts: {} }, fn));
  }
}

export function host(
  name: string,
  cfg: Partial<SSHConfig> = {},
  runner?: Runner,
): HostRef {
  const config: SSHConfig = { ...cfg, host: cfg.host ?? name };
  return new Host(name, { type: "ssh", config }, runner);
}

export const localhost = new Host("localhost", { type: "local" });
