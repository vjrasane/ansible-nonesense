import type { ExecutionBackend, TaskPayload, TaskResult } from "../types.ts";

const emptyResult: TaskResult<Record<string, unknown>> = {
  localhost: { changed: false, failed: false },
};

export class DryRunBackend implements ExecutionBackend {
  executed: TaskPayload[] = [];
  private _index = 0;

  constructor(private _cannedResults: TaskResult<Record<string, unknown>>[] = []) {}

  async execute(task: TaskPayload): Promise<TaskResult<Record<string, unknown>>> {
    this.executed.push(task);
    return this._cannedResults[this._index++] ?? emptyResult;
  }
}
