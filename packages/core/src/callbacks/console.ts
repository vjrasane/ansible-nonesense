import type { Callback, TaskResult } from "../types.ts";

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const cyan = (s: string) => `\x1b[36m${s}\x1b[0m`;
const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;

export const consoleCallback: Callback = {
  onTaskComplete(module, result: TaskResult<Record<string, unknown>>) {
    const lines = [cyan(`TASK [${module}]`) + " " + "*".repeat(40)];

    for (const [host, data] of Object.entries(result)) {
      const changed = data.changed as boolean;
      const failed = data.failed as boolean;

      let status: string;
      if (failed) status = red("FAILED");
      else if (changed) status = yellow("CHANGED");
      else status = green("OK");

      lines.push(`  ${status} ${bold(host)}`);
      if (failed && data.msg) lines.push(`    ${red(String(data.msg))}`);
    }

    console.log(lines.join("\n") + "\n");
  },

  onTaskError(module, error) {
    console.log(cyan(`TASK [${module}]`) + " " + "*".repeat(40));
    console.log(red(`  ERROR: ${error.message}`) + "\n");
  },
};
