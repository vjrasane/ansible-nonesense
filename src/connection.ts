import { spawn } from "node:child_process";

export interface ExecResult {
  stdout: string;
  stderr: string;
  rc: number;
}

export interface Connection {
  exec(
    argv: string[],
    opts?: { stdin?: Buffer; env?: Record<string, string>; timeout?: number },
  ): Promise<ExecResult>;
  putFile(local: string, remote: string, mode?: number): Promise<void>;
  getFile(remote: string, local: string): Promise<void>;
  close(): Promise<void>;
}

export class LocalConnection implements Connection {
  exec(
    argv: string[],
    opts: {
      stdin?: Buffer;
      env?: Record<string, string>;
      timeout?: number;
    } = {},
  ): Promise<ExecResult> {
    return new Promise((resolve, reject) => {
      const child = spawn(argv[0], argv.slice(1), {
        env: opts.env ? { ...process.env, ...opts.env } : process.env,
        stdio: ["pipe", "pipe", "pipe"],
      });

      const out: Buffer[] = [];
      const err: Buffer[] = [];
      child.stdout.on("data", (c) => out.push(c));
      child.stderr.on("data", (c) => err.push(c));

      const timer = opts.timeout
        ? setTimeout(() => child.kill("SIGKILL"), opts.timeout)
        : undefined;

      child.on("error", reject);
      child.on("close", (rc) => {
        if (timer) clearTimeout(timer);
        resolve({
          rc: rc ?? -1,
          stdout: Buffer.concat(out).toString(),
          stderr: Buffer.concat(err).toString(),
        });
      });

      if (opts.stdin) child.stdin.write(opts.stdin);
      child.stdin.end();
    });
  }

  putFile(local: string, remote: string, mode?: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getFile(remote: string, local: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  close(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
