import { readFileSync } from "node:fs";
import {
  Connection,
  LocalConnection,
  SSHConfig,
  SSHConnection,
} from "src/connection.ts";
import { withContext } from "src/context.ts";
import { Runner, defaultRunner } from "src/runner.ts";

type HostOpts = {
  pythonPath?: string;
};

export interface HostFacts {
  ansible_service_mgr: string;
  ansible_pkg_mgr: string;
  ansible_system: string;
}

const FACT_PROBE = readFileSync(
  new URL("../scripts/fact-probe.sh", import.meta.url),
  "utf-8",
);

export interface HostRef {
  readonly name: string;
  run<T>(fn: () => Promise<T>): Promise<T>;
}

export class Host implements HostRef {
  private pythonInterpreter: Promise<string> | null;
  private ansibleFacts: Promise<HostFacts> | null = null;

  constructor(
    public readonly name: string,
    public readonly connection: Connection,
    private readonly opts: HostOpts = {},
    public readonly explicitRunner?: Runner,
  ) {
    this.pythonInterpreter = null;
  }

  private get runner(): Runner {
    return this.explicitRunner ?? defaultRunner;
  }

  get facts(): Promise<HostFacts> {
    if (!this.ansibleFacts) this.ansibleFacts = this.discoverFacts();
    return this.ansibleFacts;
  }

  get interpreter(): Promise<string> {
    if (!this.pythonInterpreter)
      this.pythonInterpreter = this.discoverInterpreter();
    return this.pythonInterpreter;
  }

  async makeTmpPath(): Promise<string> {
    const { stdout } = await this.connection.exec(["mktemp", "-d"]);
    return stdout.toString().trim();
  }

  private async discoverInterpreter(): Promise<string> {
    if (this.opts.pythonPath) return this.opts.pythonPath;
    const { rc, stdout } = await this.connection.exec([
      "/bin/sh",
      "-c",
      "command -v python3 || command -v python",
    ]);
    const path = stdout.toString().trim();
    if (rc !== 0 || !path)
      throw new Error(`Python interpreter not found on ${this.name}`);
    return path;
  }

  private async discoverFacts(): Promise<HostFacts> {
    const { rc, stdout, stderr } = await this.connection.exec([
      "/bin/sh",
      "-c",
      FACT_PROBE,
    ]);
    if (rc !== 0)
      throw new Error(`fact probe failed on ${this.name}: rc=${rc} ${stderr}`);
    const facts: Partial<HostFacts> = {};
    for (const line of stdout.toString().trim().split("\n")) {
      const i = line.indexOf("=");
      const key = line.slice(0, i);
      const value = line.slice(i + 1);
      switch (key) {
        case "service_mgr":
          facts.ansible_service_mgr = value;
          break;
        case "pkg_mgr":
          facts.ansible_pkg_mgr = value;
          break;
        case "system":
          facts.ansible_system = value;
          break;
      }
    }

    return facts as HostFacts;
  }

  run<T>(fn: () => Promise<T>): Promise<T> {
    return this.runner.run(() => withContext({ host: this, opts: {} }, fn));
  }
}

export const localhost = new Host("localhost", new LocalConnection());

export async function execPythonOnHost(
  host: Host,
  script: string,
): Promise<any> {
  const interp = await host.interpreter;
  const { rc, stdout, stderr } = await host.connection.exec([interp], {
    stdin: Buffer.from(script),
  });
  try {
    const result = JSON.parse(stdout.toString());
    return result;
  } catch (err) {
    throw new Error(
      `Failed to parse Python output: ${String(err)}\nRC: ${rc}\nStdout: ${stdout}\nStderr: ${stderr}`,
    );
  }
}

interface RemoteHostConfig extends SSHConfig, HostOpts {}

interface LocalHostConfig extends HostOpts {}

export type HostConfig = RemoteHostConfig | LocalHostConfig;

export function host(name: string, cfg?: HostConfig, runner?: Runner): HostRef {
  if (!cfg || !("host" in cfg))
    return new Host(name, new LocalConnection(), cfg, runner);
  return new Host(name, new SSHConnection(cfg), cfg, runner);
}
