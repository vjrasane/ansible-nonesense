import type { TaskPayload, BackendResult } from "../types.js";
import { Backend } from "../backend-context.js";

const emptyResult: BackendResult<Record<string, unknown>> = {
  localhost: { changed: false, failed: false },
};

export class DryRunBackend extends Backend {
  executed: TaskPayload[] = [];
  private _index = 0;

  constructor(private _cannedResults: BackendResult<Record<string, unknown>>[] = []) {
    super();
  }

  async executeTask(task: TaskPayload): Promise<BackendResult<Record<string, unknown>>> {
    this.executed.push(task);
    return this._cannedResults[this._index++] ?? emptyResult;
  }
}
