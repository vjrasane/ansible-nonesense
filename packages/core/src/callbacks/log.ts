import type { Callback, TaskResult } from "../types.ts";

export const logCallback: Callback = {
  onTaskStart(module, args) {
    console.log(JSON.stringify({ event: "task_start", module, args, timestamp: new Date().toISOString() }));
  },

  onTaskComplete(module, result: TaskResult<Record<string, unknown>>) {
    console.log(JSON.stringify({ event: "task_complete", module, result, timestamp: new Date().toISOString() }));
  },

  onTaskError(module, error) {
    console.log(JSON.stringify({ event: "task_error", module, error: error.message, timestamp: new Date().toISOString() }));
  },
};
