// Auto-generated from: community.general.btrfs_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export type BtrfsInfoArgs = Record<string, unknown>;

export interface BtrfsInfoReturn {
  /** Summaries of the current state for all btrfs filesystems found on the target host. */
  filesystems?: Record<string, unknown> | Record<string, unknown>[];
}

export const btrfs_info = defineModule<BtrfsInfoArgs, BtrfsInfoReturn>("community.general.btrfs_info");
