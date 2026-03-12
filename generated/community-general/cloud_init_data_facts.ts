// Auto-generated from: community.general.cloud_init_data_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CloudInitDataFactsArgs {
  /** Filter facts. */
  filter?: "status" | "result";
}

export interface CloudInitDataFactsReturn {
  /** Facts of result and status. */
  cloud_init_data_facts?: Record<string, unknown>;
}

export const cloud_init_data_facts = defineModule<CloudInitDataFactsArgs, CloudInitDataFactsReturn>("community.general.cloud_init_data_facts");
