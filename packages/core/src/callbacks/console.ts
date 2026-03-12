import type { Callback, HostResult } from "../types.ts";

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

function label(module: string, name?: string): string {
  return name ? `${name} ${dim(`(${module})`)}` : module;
}

export const consoleCallback: Callback = {
  onTaskStart(host, module, _args, name) {
    console.log(`${dim(`[${host}]`)} ${label(module, name)} ${dim("...")}`);
  },

  onTaskComplete(host, module, result: HostResult<Record<string, unknown>>, name) {
    const status = result.failed
      ? red("FAILED")
      : result.changed
        ? yellow("CHANGED")
        : green("OK");

    const msg = result.failed && result.msg ? dim(` ${result.msg}`) : "";
    console.log(`${dim(`[${host}]`)} ${label(module, name)} ${status}${msg}`);
  },

  onTaskError(host, module, error, name) {
    console.log(`${dim(`[${host}]`)} ${label(module, name)} ${red(`ERROR: ${error.message}`)}`);
  },
};
