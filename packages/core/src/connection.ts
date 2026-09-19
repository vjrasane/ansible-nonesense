import { spawn } from "node:child_process";
import type { Connection, ExecResult } from "./types.js";

export interface SshConfig {
  host: string;
  user?: string;
  port?: number;
  key?: string;
  python?: string; // target interpreter, defaults to python3
}

// Reuse one OpenSSH ControlMaster per destination for the session.
const CONTROL_OPTS = [
  "-o", "BatchMode=yes",
  "-o", "ControlMaster=auto",
  "-o", "ControlPersist=10m",
  "-o", "ControlPath=~/.ssh/cm-%r@%h:%p",
];

export function sshConnection(cfg: SshConfig): Connection {
  const python = cfg.python ?? "python3";
  const dest = cfg.user ? `${cfg.user}@${cfg.host}` : cfg.host;
  const opts = [
    ...CONTROL_OPTS,
    ...(cfg.port ? ["-p", String(cfg.port)] : []),
    ...(cfg.key ? ["-i", cfg.key] : []),
  ];
  return {
    exec(script, execOpts) {
      const remote = `${execOpts?.become ? "sudo -n -H " : ""}${python} -`;
      return spawnCapture("ssh", [...opts, dest, remote], script);
    },
  };
}

export function localConnection(python = "python3"): Connection {
  return {
    exec(script, execOpts) {
      return execOpts?.become
        ? spawnCapture("sudo", ["-n", "-H", python, "-"], script)
        : spawnCapture(python, ["-"], script);
    },
  };
}

// For backends that never touch the target (e.g. dry-run).
export function noopConnection(): Connection {
  return {
    exec() {
      throw new Error("noopConnection cannot execute");
    },
  };
}

function spawnCapture(
  cmd: string,
  argv: string[],
  input: string,
): Promise<ExecResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, argv);
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", reject);
    child.on("close", (code) => resolve({ stdout, stderr, rc: code ?? -1 }));
    child.stdin.write(input);
    child.stdin.end();
  });
}
