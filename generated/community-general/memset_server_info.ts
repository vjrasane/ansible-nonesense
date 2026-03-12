// Auto-generated from: community.general.memset_server_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MemsetServerInfoArgs {
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** The server product name (that is, C(testyaa1)). */
  name: string;
}

export interface MemsetServerInfoReturn {
  /** Info from the Memset API. */
  memset_api?: unknown;
}

export const memset_server_info = defineModule<MemsetServerInfoArgs, MemsetServerInfoReturn>("community.general.memset_server_info");
