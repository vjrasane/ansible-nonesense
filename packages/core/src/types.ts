export interface Options {
  hosts?: string;
  inventory?: string;
  backend?: ExecutionBackend;
  become?: boolean;
  check?: boolean;
  diff?: boolean;
  extraVars?: Record<string, unknown>;
  verbosity?: 0 | 1 | 2 | 3 | 4;
}

export type HostResult<T> = T & {
  changed: boolean;
  failed: boolean;
};

export type TaskResult<T> = Record<string, HostResult<T>>;

export interface ExecutionBackend {
  execute(task: TaskPayload): Promise<TaskResult<Record<string, unknown>>>;
}

export interface TaskPayload {
  module: string;
  args: Record<string, unknown>;
  hosts: string;
  inventory?: string;
  become?: boolean;
  check?: boolean;
  diff?: boolean;
  extraVars?: Record<string, unknown>;
  verbosity?: 0 | 1 | 2 | 3 | 4;
}
