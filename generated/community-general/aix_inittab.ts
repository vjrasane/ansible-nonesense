// Auto-generated from: community.general.aix_inittab
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AixInittabArgs {
  /** Action the C(init) process performs for this entry. */
  action?: "boot" | "bootwait" | "hold" | "initdefault" | "off" | "once" | "ondemand" | "powerfail" | "powerwait" | "respawn" | "sysinit" | "wait";
  /** Command to be executed. */
  command: string;
  /** After which C(inittab) line should the new entry inserted. */
  insertafter?: string;
  /** Name of the C(inittab) entry. */
  name: string;
  /** Runlevel of the entry. */
  runlevel: string;
  /** Whether the entry should be present or absent in the C(inittab) file. */
  state?: "absent" | "present";
}

export interface AixInittabReturn {
  /** Name of the adjusted C(inittab) entry. */
  name?: string;
}

export const aix_inittab = defineModule<AixInittabArgs, AixInittabReturn>("community.general.aix_inittab");
