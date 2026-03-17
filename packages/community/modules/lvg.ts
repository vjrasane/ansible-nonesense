// Auto-generated from: community.general.lvg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LvgArgs {
  /** If V(true), allows to remove volume group with logical volumes. */
  force?: boolean;
  /** The size of the physical extent. O(pesize) must be a power of 2 of at least 1 sector (where the sector size is the largest sector size of the PVs currently used in the VG), or at least 128KiB. */
  pesize?: string;
  /** Additional options to pass to C(pvcreate) when creating the volume group. */
  pv_options?: string;
  /** If V(true), resize the physical volume to the maximum available size. */
  pvresize?: boolean;
  /** List of comma-separated devices to use as physical devices in this volume group. */
  pvs?: string | string[];
  /** Remove physical volumes from the volume group which are not in O(pvs). */
  remove_extra_pvs?: boolean;
  /** Whether the volume group's physical volumes' UUIDs are regenerated. */
  reset_pv_uuid?: boolean;
  /** Whether the volume group's UUID is regenerated. */
  reset_vg_uuid?: boolean;
  /** Control if the volume group exists and its state. */
  state?: "absent" | "present" | "active" | "inactive";
  /** The name of the volume group. */
  vg: string;
  /** Additional options to pass to C(vgcreate) when creating the volume group. */
  vg_options?: string;
}

export type LvgReturn = Record<string, unknown>;

export const lvg = defineModule<LvgArgs, LvgReturn>("community.general.lvg");
