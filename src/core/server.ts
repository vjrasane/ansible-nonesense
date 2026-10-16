import { execFile, spawn, type ChildProcess } from "node:child_process";
import { promisify } from "node:util";
import {
  createMessageConnection,
  type MessageConnection,
  ParameterStructures,
  StreamMessageReader,
  StreamMessageWriter,
} from "vscode-jsonrpc/node";

const execFileAsync = promisify(execFile);

export interface BootstrapOptions {
  python?: string; // explicit interpreter; else the script discovers python3.13→3.11
  env?: NodeJS.ProcessEnv; // controls XDG_DATA_HOME (where the venv lands)
}

// Provision the server runtime via the POSIX bootstrap script (design §4.8) and return
// the venv python to spawn. Idempotent: a second call is a fast no-op. Retires the
// `cwd: server/` sys.path hack — the package is now pip-installed into the venv.
export async function bootstrap(
  scriptPath: string,
  opts: BootstrapOptions = {},
): Promise<string> {
  const args = opts.python ? [scriptPath, opts.python] : [scriptPath];
  const { stdout } = await execFileAsync("sh", args, {
    encoding: "utf8",
    env: opts.env ?? process.env,
  });
  const lines = stdout.trim().split(/\r?\n/).filter(Boolean);
  return lines[lines.length - 1]!; // last line = venv python path
}

export interface HostSpec {
  id?: string;
  connection: { type: string; vars?: Record<string, unknown> };
  become?: Record<string, unknown>;
  gather_subset?: string[];
}

export interface GatherFactsParams {
  host: HostSpec;
  vars?: Record<string, unknown>;
}

export type Facts = Record<string, unknown>;

export interface RunActionParams {
  host: HostSpec;
  fqcn: string;
  args?: Record<string, unknown>;
  vars?: Record<string, unknown>;
  flags?: Record<string, unknown>;
  // Pinned collection to install server-side before running (omit for ansible.builtin).
  collection?: { name: string; version: string; source?: string };
}

export type ActionStatus = "ok" | "failed" | "unreachable" | "skipped";

export interface ResultFrame {
  status: ActionStatus;
  changed: boolean;
  result: Record<string, unknown>;
  warnings: string[];
  deprecations: string[];
}

// Drop the python path-pollution vars so the spawned venv resolves packages only from
// itself (children inherit this, so the forkserver/workers stay clean too).
function hermeticEnv(env?: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  const { PYTHONPATH: _p, PYTHONHOME: _h, ...rest } = env ?? process.env;
  return { ...rest, PYTHONNOUSERSITE: "1" };
}

// Thin client that owns one GPL ansible-jsonrpc-server child and talks to it over
// the JSON-RPC stdio seam. The server is confined to its own process; this module
// imports neither ansible nor the server (licensing firewall, design §9).
export class ServerClient {
  private readonly child: ChildProcess;
  private readonly conn: MessageConnection;
  private inflight = 0;

  constructor(pythonPath: string, opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}) {
    this.child = spawn(pythonPath, ["-m", "ansible_jsonrpc_server"], {
      // stderr inherited so server diagnostics surface; stdin/stdout are the seam.
      stdio: ["pipe", "pipe", "inherit"],
      cwd: opts.cwd,
      // Keep the venv hermetic: a surrounding nix/devenv puts its own ansible-core on
      // PYTHONPATH (prepended to sys.path), which would shadow the venv's pinned
      // version. Strip it so the server + its forkserver/workers use only the venv.
      env: hermeticEnv(opts.env),
    });
    this.conn = createMessageConnection(
      new StreamMessageReader(this.child.stdout!),
      new StreamMessageWriter(this.child.stdin!),
    );
    this.conn.listen();
    // The server is a background helper: it must not hold node's event loop open. Unref
    // the child + pipes so, once the caller's own work is done and no request is in
    // flight, node exits (and teardown below + the server's lifeline reap it). ref() is
    // re-applied per in-flight request so a pending call still keeps node alive.
    this.child.unref();
    this.setStreamsRef(false);
  }

  // child stdio are net.Socket at runtime (have ref/unref) but typed as Readable/Writable.
  private setStreamsRef(on: boolean): void {
    for (const s of [this.child.stdout, this.child.stdin] as unknown as Array<{
      ref?(): void;
      unref?(): void;
    } | null>) {
      if (on) s?.ref?.();
      else s?.unref?.();
    }
  }

  private async request<T>(method: string, params: object): Promise<T> {
    if (this.inflight++ === 0) this.setStreamsRef(true);
    try {
      return await this.conn.sendRequest(method, ParameterStructures.byName, params);
    } finally {
      if (--this.inflight === 0) this.setStreamsRef(false);
    }
  }

  runAction(params: RunActionParams): Promise<ResultFrame> {
    return this.request("runAction", params);
  }

  gatherFacts(params: GatherFactsParams): Promise<Facts> {
    return this.request("gatherFacts", params);
  }

  async close(): Promise<void> {
    try {
      await this.conn.sendNotification("shutdown");
    } catch {
      // server may already be gone; fall through to teardown
    }
    this.conn.dispose();
    this.child.kill();
  }
}
