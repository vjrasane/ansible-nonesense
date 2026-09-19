import { ChildProcess, spawn } from "node:child_process";
import path from "node:path";
import { createInterface } from "node:readline";

const SCRIPTS_DIR = path.join(__dirname, "..", "scripts");
const SIDECAR_SCRIPT = path.join(SCRIPTS_DIR, "ansible_sidecar.py");

type HostStatus = "ok" | "failed" | "unreachable" | "skipped";

export interface HostResult {
  status: HostStatus;
  result: Record<string, any>;
}

export type SidecarEvent =
  | { event: "task_start"; task: string }
  | { event: "host_start"; host: string; task: string }
  | {
      event: "host_result";
      host: string;
      status: HostStatus;
      result: Record<string, any>;
    }
  | {
      event: "item_result";
      host: string;
      status: HostStatus;
      item: unknown;
      result: Record<string, any>;
    }
  | { event: "retry"; host: string; attempt: number; retries: number }
  | { event: "async_poll"; host: string; jid: string }
  | { event: "done"; rc: number; hosts: Record<string, HostResult> };

export type DoneEvent = Extract<SidecarEvent, { event: "done" }>;

interface Stream {
  push: (ev: SidecarEvent) => void;
  fail: (err: Error) => void;
}

type SidecarOpts = {
  python?: string;
  env?: NodeJS.ProcessEnv;
};

export class AnsibleSidecar {
  private proc: ChildProcess;
  private streams = new Map<number, Stream>();
  private nextId = 1;

  constructor(private readonly opts: SidecarOpts = {}) {}

  init() {
    this.proc = spawn(this.opts.python ?? "python3", [SIDECAR_SCRIPT], {
      stdio: ["pipe", "inherit", "inherit", "pipe"], // fd 3 = events + responses
      // Own process group: one kill(-pid) reaches the sidecar AND the TQM
      // worker processes it forks. Also stops terminal Ctrl-C hitting the
      // sidecar directly; we forward shutdown ourselves.
      detached: true,
      env: {
        ...process.env,
        ANSIBLE_PIPELINING: "True",
        ANSIBLE_SSH_ARGS: "-o ControlMaster=auto -o ControlPersist=30m",
        ...this.opts.env,
      },
    });

    const rl = createInterface({
      input: this.proc.stdio[3] as NodeJS.ReadableStream,
    });
    rl.on("line", (line) => {
      const msg = JSON.parse(line);
      const s = this.streams.get(msg.id);
      if (!s) return;
      if (msg.event) {
        s.push(msg);
      } else if (msg.ok) {
        const { id, ok, done, ...rest } = msg;
        s.push({ event: "done", ...rest });
      } else {
        s.fail(new Error(msg.error));
      }
    });

    this.proc.on("exit", (code) => {
      for (const s of this.streams.values())
        s.fail(new Error(`sidecar exited with ${code}`));
      this.streams.clear();
    });
  }

  private send(req: object): AsyncGenerator<SidecarEvent, void> {
    const id = this.nextId++;
    const queue: SidecarEvent[] = [];
    let error: Error | null = null;
    let wake: (() => void) | null = null;

    this.streams.set(id, {
      push: (ev) => {
        queue.push(ev);
        wake?.();
      },
      fail: (e) => {
        error = e;
        wake?.();
      },
    });
    this.proc.stdin!.write(JSON.stringify({ id, ...req }) + "\n");

    const streams = this.streams;
    return (async function* () {
      try {
        for (;;) {
          if (error) throw error;
          if (queue.length) {
            const ev = queue.shift()!;
            yield ev;
            if (ev.event === "done") return;
            continue;
          }
          await new Promise<void>((r) => (wake = r));
          wake = null;
        }
      } finally {
        streams.delete(id);
      }
    })();
  }
}
