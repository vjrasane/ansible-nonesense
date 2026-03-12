// Auto-generated from: community.general.zfs
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZfsArgs {
  /** A dictionary of zfs properties to be set. */
  extra_zfs_properties?: Record<string, unknown>;
  /** File system, snapshot or volume name, for example V(rpool/myfs). */
  name: string;
  /** Snapshot from which to create a clone. */
  origin?: string;
  /** Whether to create (V(present)), or remove (V(absent)) a file system, snapshot or volume. All parents/children are created/destroyed as needed to reach the desired state. */
  state: "absent" | "present";
}

export type ZfsReturn = Record<string, unknown>;

export const zfs = defineModule<ZfsArgs, ZfsReturn>("community.general.zfs");
