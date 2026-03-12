// Auto-generated from: community.general.memset_memstore_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MemsetMemstoreInfoArgs {
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** The Memstore product name (that is, V(mstestyaa1)). */
  name: string;
}

export interface MemsetMemstoreInfoReturn {
  /** Info from the Memset API. */
  memset_api?: unknown;
}

export const memset_memstore_info = defineModule<MemsetMemstoreInfoArgs, MemsetMemstoreInfoReturn>("community.general.memset_memstore_info");
