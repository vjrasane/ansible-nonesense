import { spawn, type ChildProcess } from "node:child_process";
import {
  createMessageConnection,
  type MessageConnection,
  ParameterStructures,
  StreamMessageReader,
  StreamMessageWriter,
} from "vscode-jsonrpc/node";

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
}

export type ActionStatus = "ok" | "failed" | "unreachable" | "skipped";

export interface ResultFrame {
  status: ActionStatus;
  changed: boolean;
  result: Record<string, unknown>;
  warnings: string[];
  deprecations: string[];
}

// Thin client that owns one GPL ansible-jsonrpc-server child and talks to it over
// the JSON-RPC stdio seam. The server is confined to its own process; this module
// imports neither ansible nor the server (licensing firewall, design §9).
export class ServerClient {
  private readonly child: ChildProcess;
  private readonly conn: MessageConnection;

  constructor(pythonPath: string, opts: { cwd?: string } = {}) {
    this.child = spawn(pythonPath, ["-m", "ansible_jsonrpc_server"], {
      // stderr inherited so server diagnostics surface; stdin/stdout are the seam.
      stdio: ["pipe", "pipe", "inherit"],
      cwd: opts.cwd,
    });
    this.conn = createMessageConnection(
      new StreamMessageReader(this.child.stdout!),
      new StreamMessageWriter(this.child.stdin!),
    );
    this.conn.listen();
  }

  runAction(params: RunActionParams): Promise<ResultFrame> {
    // byName: send `params` as the object the server reads, not a positional array.
    return this.conn.sendRequest("runAction", ParameterStructures.byName, params);
  }

  gatherFacts(params: GatherFactsParams): Promise<Facts> {
    return this.conn.sendRequest("gatherFacts", ParameterStructures.byName, params);
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
