// Auto-generated from: community.general.syspatch
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SyspatchArgs {
  /** Revert system patches. */
  revert?: "all" | "one";
}

export interface SyspatchReturn {
  /** Whether or not a reboot is required after an update. */
  reboot_needed?: boolean;
}

export const syspatch = defineModule<SyspatchArgs, SyspatchReturn>("community.general.syspatch");
