// Auto-generated from: community.general.lvol
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LvolArgs {
  /** Whether the volume is active and visible to the host. */
  active?: boolean;
  /** Shrink or remove operations of volumes requires this switch. Ensures that filesystems never get corrupted/destroyed by mistake. */
  force?: boolean;
  /** The name of the logical volume. */
  lv?: string;
  /** Free-form options to be passed to the lvcreate command. */
  opts?: string;
  /** List of physical volumes (for example V(/dev/sda, /dev/sdb)). */
  pvs?: string | string[];
  /** Resize the underlying filesystem together with the logical volume. */
  resizefs?: boolean;
  /** Shrink if current size is higher than size requested. */
  shrink?: boolean;
  /** The size of the logical volume, according to lvcreate(8) C(--size), by default in megabytes or optionally with one of [bBsSkKmMgGtTpPeE] units; or according to lvcreate(8) C(--extents) as a percentage of [VG|PVS|FREE|ORIGIN]; Float values must begin with a digit. */
  size?: string;
  /** The name of a snapshot volume to be configured. When creating a snapshot volume, the O(lv) parameter specifies the origin volume. */
  snapshot?: string;
  /** Control if the logical volume exists. If V(present) and the volume does not already exist then the O(size) option is required. */
  state?: "absent" | "present";
  /** The thin pool volume name. When you want to create a thin provisioned volume, specify a thin pool volume name. */
  thinpool?: string;
  /** The volume group this logical volume is part of. */
  vg: string;
}

export type LvolReturn = Record<string, unknown>;

export const lvol = defineModule<LvolArgs, LvolReturn>("community.general.lvol");
