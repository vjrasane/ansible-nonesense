import type { Callback, TaskResult } from "../types.ts";

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const cyan = (s: string) => `\x1b[36m${s}\x1b[0m`;
const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;

export const consoleCallback: Callback = {
  onTaskStart(module) {
    console.log(cyan(`TASK [${module}]`) + " " + "*".repeat(40));
  },

  onTaskComplete(_module, result: TaskResult<Record<string, unknown>>) {
    for (const [host, data] of Object.entries(result)) {
      const changed = data.changed as boolean;
      const failed = data.failed as boolean;

      let status: string;
      if (failed) status = red("FAILED");
      else if (changed) status = yellow("CHANGED");
      else status = green("OK");

      console.log(`  ${status} ${bold(host)}`);
    }
    console.log();
  },

  onTaskError(module, error) {
    console.log(red(`ERROR [${module}]: ${error.message}`));
    console.log();
  },
};
