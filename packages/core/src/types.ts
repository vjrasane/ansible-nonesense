export interface Callback {
  onTaskStart?(
    host: string,
    module: string,
    args: Record<string, unknown>,
    name?: string,
  ): void;
  onTaskComplete?(
    host: string,
    module: string,
    result: HostResult<Record<string, unknown>>,
    name?: string,
  ): void;
  onTaskError?(host: string, module: string, error: Error, name?: string): void;
}

export interface Host {
  readonly name: string;
  readonly connection?: string;
  readonly vars?: Readonly<Record<string, unknown>>;
}

export interface Options {
  name?: string;
  host?: Host;
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

export type TaskOptions = Options;

export type HostResult<T> = T & {
  changed: boolean;
  failed: boolean;
};

export type BackendResult<T> = Record<string, HostResult<T>>;

export interface ExecutionBackend {
  execute(task: TaskPayload): Promise<BackendResult<Record<string, unknown>>>;
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
