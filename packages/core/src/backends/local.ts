import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { ExecutionBackend, TaskPayload, TaskResult } from "../types.ts";

const exec = promisify(execFile);

const MIN_VERSION = [2, 17];

interface AnsibleJsonOutput {
  plays: Array<{
    tasks: Array<{
      hosts: Record<string, Record<string, unknown>>;
    }>;
  }>;
  stats: Record<string, { changed: number; failures: number }>;
}

async function checkAnsible(path: string): Promise<void> {
  let stdout: string;
  try {
    const result = await exec(path, ["--version"]);
    stdout = result.stdout;
  } catch {
    throw new Error(
      `ansible not found at "${path}". Install ansible-core >= ${MIN_VERSION.join(".")}:\n` +
        "  pip install ansible-core\n" +
        "  # or: apt install ansible-core / brew install ansible",
    );
  }

  const match = stdout.match(/ansible \[core (\d+)\.(\d+)/);
  if (!match) {
    throw new Error(
      `Could not determine ansible version from: ${stdout.split("\n")[0]}`,
    );
  }

  const major = parseInt(match[1]);
  const minor = parseInt(match[2]);
  if (
    major < MIN_VERSION[0] ||
    (major === MIN_VERSION[0] && minor < MIN_VERSION[1])
  ) {
    throw new Error(
      `ansible-core ${major}.${minor} is too old. Requires >= ${MIN_VERSION.join(".")}`,
    );
  }
}

export class LocalBackend implements ExecutionBackend {
  private _checked: Promise<void> | undefined;

  constructor(private _ansible = "ansible") {
    this._ansible = _ansible;
  }

  async execute(
    task: TaskPayload,
  ): Promise<TaskResult<Record<string, unknown>>> {
    if (!this._checked) {
      this._checked = checkAnsible(this._ansible);
    }
    await this._checked;

    const args = [
      task.hosts,
      "-m",
      task.module,
      "--connection",
      "local",
    ];

    if (Object.keys(task.args).length > 0) {
      args.push("-a", JSON.stringify(task.args));
    }

    if (task.inventory) args.push("-i", task.inventory);
    if (task.become) args.push("--become");
    if (task.check) args.push("--check");
    if (task.diff) args.push("--diff");

    if (task.extraVars) {
      args.push("-e", JSON.stringify(task.extraVars));
    }

    if (task.verbosity) {
      args.push(`-${"v".repeat(task.verbosity)}`);
    }

    const env = {
      ...process.env,
      ANSIBLE_LOAD_CALLBACK_PLUGINS: "true",
      ANSIBLE_STDOUT_CALLBACK: "json",
      ANSIBLE_DEPRECATION_WARNINGS: "false",
    };

    let stdout: string;
    try {
      const result = await exec(this._ansible, args, { env });
      stdout = result.stdout;
    } catch (err: unknown) {
      const e = err as { stdout?: string; stderr?: string; code?: number };
      if (e.stdout) {
        stdout = e.stdout;
      } else {
        throw new Error(
          `ansible failed (exit ${e.code}): ${e.stderr ?? "unknown error"}`,
        );
      }
    }

    return parseJsonOutput(stdout);
  }
}

function parseJsonOutput(stdout: string): TaskResult<Record<string, unknown>> {
  const output: AnsibleJsonOutput = JSON.parse(stdout);

  const hostsData = output.plays?.[0]?.tasks?.[0]?.hosts ?? {};
  const result: TaskResult<Record<string, unknown>> = {};

  for (const [hostname, rawData] of Object.entries(hostsData)) {
    const data: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(rawData)) {
      if (!k.startsWith("_ansible_")) {
        data[k] = v;
      }
    }

    const stats = output.stats?.[hostname];
    result[hostname] = {
      ...data,
      changed: (data.changed as boolean) ?? (stats?.changed ?? 0) > 0,
      failed: (data.failed as boolean) ?? (stats?.failures ?? 0) > 0,
    };
  }

  return result;
}
