import type { ExecutionBackend, TaskPayload, BackendResult } from "../types.ts";

const emptyResult: BackendResult<Record<string, unknown>> = {
  localhost: { changed: false, failed: false },
};

export class DryRunBackend implements ExecutionBackend {
  executed: TaskPayload[] = [];
  private _index = 0;

  constructor(private _cannedResults: BackendResult<Record<string, unknown>>[] = []) {}

  async execute(task: TaskPayload): Promise<BackendResult<Record<string, unknown>>> {
    this.executed.push(task);
    return this._cannedResults[this._index++] ?? emptyResult;
  }
}
