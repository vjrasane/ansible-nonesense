// Auto-generated from: community.general.memset_dns_reload
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MemsetDnsReloadArgs {
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** If V(true), it polls the reload job's status and return when the job has completed (unless the 30 second timeout is reached first). If the timeout is reached then the task does not return as failed, but stderr indicates that the polling failed. */
  poll?: boolean;
}

export interface MemsetDnsReloadReturn {
  /** Raw response from the Memset API. */
  memset_api?: unknown;
}

export const memset_dns_reload = defineModule<MemsetDnsReloadArgs, MemsetDnsReloadReturn>("community.general.memset_dns_reload");
