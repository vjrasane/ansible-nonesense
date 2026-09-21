import { spawn } from "node:child_process";
import { createReadStream, createWriteStream, mkdirSync } from "node:fs";
import { copyFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { once } from "node:events";
import { pipeline } from "node:stream/promises";
import type { Readable, Writable } from "node:stream";
import { packageName } from "./config.ts";

export interface ExecResult {
  stdout: Buffer;
  stderr: Buffer;
  rc: number;
}

export interface ProcHandle {
  stdin: Writable;
  stdout: Readable;
  result: Promise<Omit<ExecResult, "stdout">>;
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
  removeFile(path: string): Promise<void>;
  makeTmpDir(): Promise<string>;
  close(): Promise<void>;
}

const shquote = (s: string) => `'${s.replaceAll("'", `'\\''`)}'`;

abstract class AbstractConnection implements Connection {
  protected abstract spawn(argv: string[], opts?: ExecOpts): ProcHandle;
  abstract close(): Promise<void>;

  async exec(argv: string[], opts: ExecOpts = {}): Promise<ExecResult> {
    const p = this.spawn(argv, opts);
    const out: Buffer[] = [];
    p.stdout.on("data", (c) => out.push(c));
    if (opts.stdin) p.stdin.write(opts.stdin);
    p.stdin.end();
    const { rc, stderr } = await p.result;
    return { rc, stdout: Buffer.concat(out), stderr };
  }

  async putFile(local: string, remote: string, mode?: number): Promise<void> {
    const cmd =
      mode != null
        ? `cat > ${shquote(remote)} && chmod ${mode.toString(8)} ${shquote(remote)}`
        : `cat > ${shquote(remote)}`;
    const handle = this.spawn(["/bin/sh", "-c", cmd]);
    const rs = createReadStream(local);
    rs.pipe(handle.stdin);

    const [{ rc, stderr }] = await Promise.all([
      handle.result,
      once(rs, "end"),
    ]);
    if (rc !== 0) throw new Error(`putFile ${remote}: ${stderr}`);
  }

  async getFile(remote: string, local: string): Promise<void> {
    const handle = this.spawn(["cat", remote]);
    handle.stdin.end();
    const ws = createWriteStream(local);
    handle.stdout.pipe(ws);

    const [{ rc, stderr }] = await Promise.all([
      handle.result,
      once(ws, "finish"),
    ]);
    if (rc !== 0) throw new Error(`getFile ${remote}: ${stderr}`);
  }

  async removeFile(path: string) {
    await this.exec(["rm", "-rf", path]);
  }

  async makeTmpDir() {
    return (await this.exec(["mktemp", "-d"])).stdout.toString().trim();
  }
}

function spawnStream(
  cmd: string,
  args: string[],
  opts: ExecOpts = {},
): ProcHandle {
  const child = spawn(cmd, args, {
    env: opts.env ? { ...process.env, ...opts.env } : process.env,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const errChunks: Buffer[] = [];
  child.stderr!.on("data", (c) => errChunks.push(c));
  const timer = opts.timeout
    ? setTimeout(() => child.kill("SIGKILL"), opts.timeout)
    : undefined;
  const result = new Promise<{ rc: number; stderr: Buffer }>(
    (resolve, reject) => {
      child.on("error", reject);
      child.on("close", (rc) => {
        if (timer) clearTimeout(timer);
        resolve({ rc: rc ?? -1, stderr: Buffer.concat(errChunks) });
      });
    },
  );
  return { stdin: child.stdin!, stdout: child.stdout!, result };
}

export class LocalConnection extends AbstractConnection {
  protected spawn(argv: string[], opts?: ExecOpts): ProcHandle {
    return spawnStream(argv[0], argv.slice(1), opts);
  }
  async close(): Promise<void> {}

  async removeFile(path: string): Promise<void> {
    await rm(path, { recursive: true, force: true });
  }

  async getFile(remote: string, local: string): Promise<void> {
    await copyFile(remote, local);
  }

  async putFile(local: string, remote: string, mode?: number): Promise<void> {
    await pipeline(
      createReadStream(local),
      createWriteStream(remote, mode != null ? { mode } : undefined),
    );
  }
}

export interface SSHConfig {
  host: string;
  user?: string;
  port?: number;
  identityFile?: string;
}

export class SSHConnection extends AbstractConnection {
  private readonly controlPath: string;

  constructor(private cfg: SSHConfig) {
    super();

    const base = process.env.XDG_RUNTIME_DIR ?? tmpdir();
    const dir = join(base, packageName + "-ssh");
    mkdirSync(dir, { recursive: true, mode: 0o700 });
    this.controlPath = join(dir, "%C");
  }

  protected spawn(argv: string[], opts?: ExecOpts) {
    return spawnStream("ssh", this.sshArgv(argv.map(shquote).join(" ")), {
      timeout: opts?.timeout,
    });
  }

  async close() {
    try {
      await spawnStream("ssh", [...this.controlArgs, "-O", "exit", this.target])
        .result;
    } catch {}
  }

  private get target(): string {
    return this.cfg.user ? `${this.cfg.user}@${this.cfg.host}` : this.cfg.host;
  }

  private get controlArgs(): string[] {
    const o = (k: string, v: string) => ["-o", `${k}=${v}`];
    return [
      ...o("BatchMode", "yes"), // key-only; fail fast, never hang on a prompt
      ...o("StrictHostKeyChecking", "accept-new"), // don't hang on first connect; still reject changed keys
      ...o("ControlMaster", "auto"),
      ...o("ControlPath", this.controlPath),
      ...o("ControlPersist", "60s"), // reuse the master kills per-exec round-trips
      ...(this.cfg.port ? ["-p", String(this.cfg.port)] : []),
      ...(this.cfg.identityFile ? ["-i", this.cfg.identityFile] : []),
    ];
  }

  private sshArgv(remoteCmd: string): string[] {
    return [...this.controlArgs, this.target, remoteCmd];
  }
}
