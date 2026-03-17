// Auto-generated from: community.general.lvm_pv
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LvmPvArgs {
  /** Path to the block device to manage. */
  device: string;
  /** Force the operation. */
  force?: boolean;
  /** Resize PV to device size when O(state=present). */
  resize?: boolean;
  /** Control if the physical volume exists. */
  state?: "present" | "absent";
}

export type LvmPvReturn = Record<string, unknown>;

export const lvm_pv = defineModule<LvmPvArgs, LvmPvReturn>("community.general.lvm_pv");
