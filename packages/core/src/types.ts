export interface Callback {
  onTaskStart?(module: string, args: Record<string, unknown>): void;
  onTaskComplete?(module: string, result: TaskResult<Record<string, unknown>>): void;
  onTaskError?(module: string, error: Error): void;
}

export interface Host {
  readonly name: string;
  readonly vars?: Readonly<Record<string, unknown>>;
}

export interface Options {
  hosts?: string | Host[];
  inventory?: string;
  backend?: ExecutionBackend;
  callbacks?: Callback[];
  continueOnError?: boolean;
  connection?: string;
  become?: boolean;
  check?: boolean;
  diff?: boolean;
  extraVars?: Record<string, unknown>;
  verbosity?: 0 | 1 | 2 | 3 | 4;
}

export type TaskOptions = Omit<Options, "hosts" | "inventory">;

export interface RunContext {
  excludeFailed<T extends Record<string, { failed: boolean }>>(result: T): T;
  getHosts(): Host[];
}

export interface RunResult<T> {
  value: T;
  hosts: Record<string, { failed: boolean }>;
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
