// Auto-generated from: community.general.zfs_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZfsFactsArgs {
  /** Specifies recursion depth. */
  depth?: number;
  /** ZFS dataset name. */
  name: string;
  /** Specifies if property values should be displayed in machine friendly format. */
  parsable?: boolean;
  /** Specifies which dataset properties should be queried in comma-separated format. For more information about dataset properties, check zfs(1M) man page. */
  properties?: string;
  /** Specifies if properties for any children should be recursively displayed. */
  recurse?: boolean;
  /** Specifies which datasets types to display. Multiple values have to be provided as a list or in comma-separated form. */
  type?: "all" | "filesystem" | "volume" | "snapshot" | "bookmark";
}

export interface ZfsFactsReturn {
  /** ZFS dataset name. */
  name?: string;
  /** If parsable output should be provided in machine friendly format. */
  parsable?: boolean;
  /** If we should recurse over ZFS dataset. */
  recurse?: boolean;
  /** ZFS dataset facts. */
  zfs_datasets?: string;
}

export const zfs_facts = defineModule<ZfsFactsArgs, ZfsFactsReturn>("community.general.zfs_facts");
