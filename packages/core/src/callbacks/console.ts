import type { Callback, HostResult } from "../types.js";

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

function labels(_args: Record<string, unknown>, path: string[]): string {
  const { host, module } = _args;
  return [
    host && dim(`[${host}]`),
    module && dim(`(${module})`),
    !!path.length && path.join(" > "),
  ]
    .filter(Boolean)
    .join(" ");
}

export const consoleCallback: Callback = {
  onTaskStart(_args, path) {
    console.log(`${labels(_args, path)} ...`);
  },

  onTaskComplete(result, _args, path) {
    const status = result.failed
      ? red("FAILED")
      : result.changed
        ? yellow("CHANGED")
        : green("OK");

    const msg = result.failed && result.msg ? dim(` ${result.msg}`) : "";
    console.log(`${labels(_args, path)} ${status}${msg}`);
  },

  onTaskError(error, _args, path) {
    console.log(`${labels(_args, path)} ${red(`ERROR: ${error.message}`)}`);
  },

  onMessage(message, _args, path) {
    console.log(`${labels(_args, path)} ${message}`);
  },
};
