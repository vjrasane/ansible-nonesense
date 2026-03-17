// Auto-generated from: community.general.awall
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AwallArgs {
  /** Activate the new firewall rules. */
  activate?: boolean;
  /** One or more policy names. */
  name?: string | string[];
  /** Whether the policies should be enabled or disabled. */
  state?: "disabled" | "enabled";
}

export type AwallReturn = Record<string, unknown>;

export const awall = defineModule<AwallArgs, AwallReturn>("community.general.awall");
