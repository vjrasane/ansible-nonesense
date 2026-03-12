// Auto-generated from: community.general.capabilities
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CapabilitiesArgs {
  /** Desired capability to set (with operator and flags, if O(state=present)) or remove (if O(state=absent)). */
  capability: string;
  /** Specifies the path to the file to be managed. */
  path: string;
  /** Whether the entry should be present or absent in the file's capabilities. */
  state?: "absent" | "present";
}

export type CapabilitiesReturn = Record<string, unknown>;

export const capabilities = defineModule<CapabilitiesArgs, CapabilitiesReturn>("community.general.capabilities");
