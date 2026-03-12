import type { Callback, HostResult } from "../types.ts";

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

function label(module: string, path: string[]): string {
  if (path.length === 0) return module;
  return `${path.join(" > ")} ${dim(`(${module})`)}`;
}

export const consoleCallback: Callback = {
  onTaskStart(host, module, _args, path) {
    console.log(`${dim(`[${host}]`)} ${label(module, path)} ${dim("...")}`);
  },

  onTaskComplete(host, module, result: HostResult<Record<string, unknown>>, path) {
    const status = result.failed
      ? red("FAILED")
      : result.changed
        ? yellow("CHANGED")
        : green("OK");

    const msg = result.failed && result.msg ? dim(` ${result.msg}`) : "";
    console.log(`${dim(`[${host}]`)} ${label(module, path)} ${status}${msg}`);
  },

  onTaskError(host, module, error, path) {
    console.log(`${dim(`[${host}]`)} ${label(module, path)} ${red(`ERROR: ${error.message}`)}`);
  },

  onMessage(host, message, path) {
    const prefix = path.length > 0 ? `${path.join(" > ")} ` : "";
    console.log(`${dim(`[${host}]`)} ${prefix}${message}`);
  },
};
