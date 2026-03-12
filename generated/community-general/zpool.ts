// Auto-generated from: community.general.zpool
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZpoolArgs {
  /** Alternate root for mounting filesystems. */
  altroot?: string;
  /** If V(true), disable new ZFS feature flags when creating. */
  disable_new_features?: boolean;
  /** Dictionary of ZFS filesystem properties to set on the root dataset (for example V(compression), V(dedup)). */
  filesystem_properties?: Record<string, unknown>;
  /** If V(true), force operations (for example overwrite existing devices). */
  force?: boolean;
  /** Filesystem mountpoint for the root dataset. */
  mountpoint?: string;
  /** Name of the zpool to manage. */
  name: string;
  /** Dictionary of ZFS pool properties to set (for example V(autoexpand), V(cachefile)). */
  pool_properties?: Record<string, unknown>;
  /** Whether the pool should exist. */
  state?: "present" | "absent";
  /** Temporary name used during pool creation. */
  temp_name?: string;
  /** List of vdev definitions for the pool. */
  vdevs?: Record<string, unknown> | Record<string, unknown>[];
}

export type ZpoolReturn = Record<string, unknown>;

export const zpool = defineModule<ZpoolArgs, ZpoolReturn>("community.general.zpool");
