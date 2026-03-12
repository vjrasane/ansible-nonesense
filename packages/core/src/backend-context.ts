import { AsyncLocalStorage } from "node:async_hooks";
import type { ExecutionBackend, TaskPayload, BackendResult } from "./types.ts";

export const backendContext = new AsyncLocalStorage<ExecutionBackend>();

export abstract class Backend implements ExecutionBackend {
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    return backendContext.run(this, fn);
  }

  abstract executeTask(task: TaskPayload): Promise<BackendResult<Record<string, unknown>>>;
}

export function dispatchTask(
  backend: ExecutionBackend,
  task: TaskPayload,
): Promise<BackendResult<Record<string, unknown>>> {
  return (backend as Backend).executeTask(task);
}
