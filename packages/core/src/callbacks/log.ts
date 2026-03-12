import type { Callback, HostResult } from "../types.ts";

export const logCallback: Callback = {
  onTaskStart(host, module, args) {
    console.log(JSON.stringify({ event: "task_start", host, module, args, timestamp: new Date().toISOString() }));
  },
  onTaskComplete(host, module, result: HostResult<Record<string, unknown>>) {
    console.log(JSON.stringify({ event: "task_complete", host, module, result, timestamp: new Date().toISOString() }));
  },
  onTaskError(host, module, error) {
    console.log(JSON.stringify({ event: "task_error", host, module, error: error.message, timestamp: new Date().toISOString() }));
  },
};
