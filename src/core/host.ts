import {
  Connection,
  ExecOpts,
  LocalConnection,
  SSHConfig,
  SSHConnection,
} from "src/core/connection.ts";
import { withContext } from "src/core/context.ts";
import { Runner, defaultRunner } from "src/core/runner.ts";

type HostOpts = {
  pythonPath?: string;
};

export interface HostRef {
  readonly name: string;
  run<T>(fn: () => Promise<T>): Promise<T>;
}

export class Host implements HostRef {
  private pythonInterpreter: Promise<string> | null;

  constructor(
    public readonly name: string,
    public readonly connection: Connection,
    private readonly opts: HostOpts = {},
    public readonly _runner?: Runner,
  ) {
    this.pythonInterpreter = null;
  }

  get runner(): Runner {
    return this._runner ?? defaultRunner;
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

  run<T>(fn: () => Promise<T>): Promise<T> {
    return this.runner.run(() => withContext({ host: this, opts: {} }, fn));
  }
}

export async function execPythonOnHost(
  host: Host,
  script: string,
  opts: ExecOpts = {},
): Promise<any> {
  const interp = await host.interpreter;
  const { rc, stdout, stderr } = await host.connection.exec([interp], {
    ...opts,
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

interface RemoteHostConfig extends Partial<SSHConfig>, HostOpts {}

interface LocalHostConfig extends HostOpts {}

export type HostConfig = RemoteHostConfig | LocalHostConfig;

export function host(
  name: string,
  cfg: RemoteHostConfig = {},
  runner?: Runner,
): HostRef {
  const sshCfg = { ...cfg, host: cfg.host ?? name };
  return new Host(name, new SSHConnection(sshCfg), sshCfg, runner);
}

export const localhost = new Host("localhost", new LocalConnection());
