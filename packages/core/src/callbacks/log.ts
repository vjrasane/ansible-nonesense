import type { Callback, HostResult } from "../types.ts";

export const logCallback: Callback = {
  onTaskStart(host, module, args, path) {
    console.log(JSON.stringify({ event: "task_start", host, module, path, args, timestamp: new Date().toISOString() }));
  },
  onTaskComplete(host, module, result: HostResult<Record<string, unknown>>, path) {
    console.log(JSON.stringify({ event: "task_complete", host, module, path, result, timestamp: new Date().toISOString() }));
  },
  onTaskError(host, module, error, path) {
    console.log(JSON.stringify({ event: "task_error", host, module, path, error: error.message, timestamp: new Date().toISOString() }));
  },
};
