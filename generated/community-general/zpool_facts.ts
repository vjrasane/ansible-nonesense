// Auto-generated from: community.general.zpool_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZpoolFactsArgs {
  /** ZFS pool name. */
  name?: string;
  /** Specifies if property values should be displayed in machine friendly format. */
  parsable?: boolean;
  /** Specifies which dataset properties should be queried in comma-separated format. For more information about dataset properties, check zpool(1M) man page. */
  properties?: string;
}

export interface ZpoolFactsReturn {
  /** Dictionary containing all the detailed information about the ZFS pool facts. */
  ansible_facts?: unknown;
  /** ZFS pool name. */
  name?: string;
  /** If parsable output should be provided in machine friendly format. */
  parsable?: boolean;
}

export const zpool_facts = defineModule<ZpoolFactsArgs, ZpoolFactsReturn>("community.general.zpool_facts");
