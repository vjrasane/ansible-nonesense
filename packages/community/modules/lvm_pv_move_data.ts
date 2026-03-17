// Auto-generated from: community.general.lvm_pv_move_data
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LvmPvMoveDataArgs {
  /** Makes the C(pvmove) operation atomic, ensuring that all affected LVs are moved to the destination PV, or none are if the operation is aborted. */
  atomic?: boolean;
  /** Answer yes to all prompts automatically. */
  auto_answer?: boolean;
  /** Automatically backup metadata before changes (strongly advised!). */
  autobackup?: boolean;
  /** Path to the destination block device to move data to. */
  destination: string;
  /** Path to the source block device to move data from. */
  source: string;
}

export interface LvmPvMoveDataReturn {
  /** List of actions performed during module execution. */
  actions?: string | string[];
}

export const lvm_pv_move_data = defineModule<LvmPvMoveDataArgs, LvmPvMoveDataReturn>("community.general.lvm_pv_move_data");
