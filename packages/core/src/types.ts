export interface Callback {
  onTaskStart?(args: Record<string, string>, path: string[]): void;
  onTaskComplete?(
    result: HostResult<Record<string, unknown>>,
    args: Record<string, string>,
    path: string[],
  ): void;
  onTaskError?(
    error: Error,
    args: Record<string, string>,
    path: string[],
  ): void;
  onMessage?(
    message: string,
    args: Record<string, string>,
    path: string[],
  ): void;
}

export interface ExecResult {
  stdout: string;
  stderr: string;
  rc: number;
}

// How to reach a host and run a payload on it. The backend depends only on
// this; it never knows whether execution is local, over SSH, or otherwise.
export interface Connection {
  exec(script: string, opts?: { become?: boolean }): Promise<ExecResult>;
}

export interface Host {
  readonly name: string;
  readonly connection: Connection;
  readonly vars?: Readonly<Record<string, unknown>>;
}

export interface Options {
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
  execute<T>(fn: () => Promise<T>): Promise<T>;
}

export interface TaskPayload<TArgs = Record<string, unknown>> {
  args: TArgs;
  host: Host;
}

export interface ModulePayload<
  TArgs = Record<string, unknown>,
> extends TaskPayload<TArgs> {
  module: string;
  host: Host;
  become?: boolean;
  check?: boolean;
  diff?: boolean;
  extraVars?: Record<string, unknown>;
  verbosity?: 0 | 1 | 2 | 3 | 4;
}
