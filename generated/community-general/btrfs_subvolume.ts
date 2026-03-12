// Auto-generated from: community.general.btrfs_subvolume
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface BtrfsSubvolumeArgs {
  /** Allow the module to temporarily mount the targeted btrfs filesystem in order to validate the current state and make any required changes. */
  automount?: boolean;
  /** Make the subvolume specified by O(name) the filesystem's default subvolume. */
  default?: boolean;
  /** A block device contained within the btrfs filesystem to be targeted. */
  filesystem_device?: string;
  /** A descriptive label assigned to the btrfs filesystem to be targeted. */
  filesystem_label?: string;
  /** A unique identifier assigned to the btrfs filesystem to be targeted. */
  filesystem_uuid?: string;
  /** Name of the subvolume/snapshot to be targeted. */
  name: string;
  /** When true, indicates that parent/child subvolumes should be created/removedas necessary to complete the operation (for O(state=present) and O(state=absent) respectively). */
  recursive?: boolean;
  /** Policy defining behavior when a subvolume already exists at the path of the requested snapshot. */
  snapshot_conflict?: "skip" | "clobber" | "error";
  /** Identifies the source subvolume for the created snapshot. */
  snapshot_source?: string;
  /** Indicates the current state of the targeted subvolume. */
  state?: "absent" | "present";
}

export interface BtrfsSubvolumeReturn {
  /** A summary of the final state of the targeted btrfs filesystem. */
  filesystem?: Record<string, unknown>;
  /** A list where each element describes a change made to the target btrfs filesystem. */
  modifications?: string | string[];
  /** The ID of the subvolume specified with the O(name) parameter, either pre-existing or created as part of module execution. */
  target_subvolume_id?: number;
}

export const btrfs_subvolume = defineModule<BtrfsSubvolumeArgs, BtrfsSubvolumeReturn>("community.general.btrfs_subvolume");
