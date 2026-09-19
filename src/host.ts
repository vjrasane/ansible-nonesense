import { Connection } from "./connection.ts";

type HostConfig = {
  pythonPath?: string;
};

type HostFacts = {};

export class Host {
  private pythonInterpreter: Promise<string> | null;
  private facts: Promise<HostFacts> | null = null;

  constructor(
    public readonly name: string,
    public readonly connection: Connection,
    private readonly config: HostConfig = {},
  ) {
    this.pythonInterpreter = null;
  }

  private async discoverInterpreter(): Promise<string> {
    if (this.config.pythonPath) return this.config.pythonPath;
    const { rc, stdout } = await this.connection.exec([
      "/bin/sh",
      "-c",
      "command -v python3 || command -v python",
    ]);
    const path = stdout.trim();
    if (rc !== 0 || !path)
      throw new Error(`Python interpreter not found on ${this.name}`);
    return path;
  }

  private interpreter(): Promise<string> {
    if (!this.pythonInterpreter)
      this.pythonInterpreter = this.discoverInterpreter();
    return this.pythonInterpreter;
  }

  async execPython(script: string): Promise<any> {
    const interp = await this.interpreter();
    const { rc, stdout, stderr } = await this.connection.exec([interp], {
      stdin: Buffer.from(script),
    });
    try {
      const result = JSON.parse(stdout);
      return result;
    } catch (err) {
      throw new Error(
        `Failed to parse Python output: ${String(err)}\nRC: ${rc}\nStdout: ${stdout}\nStderr: ${stderr}`,
      );
    }
  }
}

// export async function execModuleOnHost(
//   host: Host,
//   argv: string[],
//   opts?: {
//     stdin?: Buffer;
//     env?: Record<string, string>;
//     timeout?: number;
//   },
// ) {
//   const res = await host.connection.exec(["echo", "Hello, World!"]);
//   console.log("Module execution result:", res.stdout);
// }
