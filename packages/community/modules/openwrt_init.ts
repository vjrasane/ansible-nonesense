// Auto-generated from: community.general.openwrt_init
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OpenwrtInitArgs {
  /** Whether the service should start on boot. B(At least one) of O(state) and O(enabled) are required. */
  enabled?: boolean;
  /** Name of the service. */
  name: string;
  /** If the service does not respond to the C(running) command, name a substring to look for as would be found in the output of the C(ps) command as a stand-in for a C(running) result. If the string is found, the service is assumed to be running. */
  pattern?: string;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. */
  state?: "started" | "stopped" | "restarted" | "reloaded";
}

export type OpenwrtInitReturn = Record<string, unknown>;

export const openwrt_init = defineModule<OpenwrtInitArgs, OpenwrtInitReturn>("community.general.openwrt_init");
