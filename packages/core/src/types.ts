export interface Callback {
  onTaskStart?(module: string, args: Record<string, unknown>): void;
  onTaskComplete?(module: string, result: TaskResult<Record<string, unknown>>): void;
  onTaskError?(module: string, error: Error): void;
}

export interface Options {
  hosts?: string;
  inventory?: string;
  backend?: ExecutionBackend;
  callbacks?: Callback[];
  ignoreErrors?: boolean;
  connection?: string;
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
  connection?: string;
  become?: boolean;
  check?: boolean;
  diff?: boolean;
  extraVars?: Record<string, unknown>;
  verbosity?: 0 | 1 | 2 | 3 | 4;
}
