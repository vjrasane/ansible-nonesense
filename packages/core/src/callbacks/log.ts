import type { Callback, HostResult } from "../types.ts";

export const logCallback: Callback = {
  onTaskStart(host, module, args, name) {
    console.log(JSON.stringify({ event: "task_start", host, module, name, args, timestamp: new Date().toISOString() }));
  },
  onTaskComplete(host, module, result: HostResult<Record<string, unknown>>, name) {
    console.log(JSON.stringify({ event: "task_complete", host, module, name, result, timestamp: new Date().toISOString() }));
  },
  onTaskError(host, module, error, name) {
    console.log(JSON.stringify({ event: "task_error", host, module, name, error: error.message, timestamp: new Date().toISOString() }));
  },
};
