import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export interface ExecResult {
  stdout: string;
  stderr: string;
  rc: number;
}

export interface ExecOpts {
  stdin?: Buffer;
  env?: Record<string, string>;
  timeout?: number;
}

export interface Connection {
  exec(argv: string[], opts?: ExecOpts): Promise<ExecResult>;
  putFile(local: string, remote: string, mode?: number): Promise<void>;
  getFile(remote: string, local: string): Promise<void>;
  close(): Promise<void>;
}

export class LocalConnection implements Connection {
  exec(argv: string[], opts: ExecOpts = {}): Promise<ExecResult> {
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

export const localConnection = new LocalConnection();

const shquote = (s: string) => `'${s.replaceAll("'", `'\\''`)}'`;

export interface SSHConfig {
  host: string;
  user?: string;
  port?: number;
  identityFile?: string;
}

export class SSHConnection implements Connection {
  private readonly controlPath: string;

  constructor(private cfg: SSHConfig) {
    const base = process.env.XDG_RUNTIME_DIR ?? tmpdir();
    const dir = join(base, "sensible-ts-ssh");
    mkdirSync(dir, { recursive: true, mode: 0o700 });
    this.controlPath = join(dir, "%C");
  }
  async exec(argv: string[], opts?: ExecOpts): Promise<ExecResult> {
    const target = this.cfg.user
      ? `${this.cfg.user}@${this.cfg.host}`
      : this.cfg.host;
    const o = (k: string, v: string) => ["-o", `${k}=${v}`];
    const sshArgs = [
      "ssh",
      ...o("BatchMode", "yes"), // key-only; fail fast, never hang on a prompt
      ...o("StrictHostKeyChecking", "accept-new"), // don't hang on first connect; still reject changed keys
      ...o("ControlMaster", "auto"),
      ...o("ControlPath", this.controlPath),
      ...o("ControlPersist", "60s"), // reuse the master  kills per-exec round-trips
      ...(this.cfg.port ? ["-p", String(this.cfg.port)] : []),
      ...(this.cfg.identityFile ? ["-i", this.cfg.identityFile] : []),
      target,
      argv.map(shquote).join(" "), // remote shell parses ONE string - quote every arg
    ];
    return localConnection.exec(sshArgs, {
      stdin: opts?.stdin,
      timeout: opts?.timeout,
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
