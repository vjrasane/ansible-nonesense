// Auto-generated from: ansible.builtin.async_status
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AsyncStatusArgs {
  /** Job or task identifier */
  jid: string;
  /** If V(status), obtain the status. */
  mode?: "cleanup" | "status";
}

export interface AsyncStatusReturn {
  /** The asynchronous job id */
  ansible_job_id?: string;
  /** Path to erased job file */
  erased?: string;
  /** Whether the asynchronous job has finished or not */
  finished?: boolean;
  /** Whether the asynchronous job has started or not */
  started?: boolean;
  /** Any errors returned by async_wrapper */
  stderr?: string;
  /** Any output returned by async_wrapper */
  stdout?: string;
}

export const async_status = defineModule<AsyncStatusArgs, AsyncStatusReturn>("ansible.builtin.async_status");
