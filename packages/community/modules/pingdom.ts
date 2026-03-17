// Auto-generated from: community.general.pingdom
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PingdomArgs {
  /** Pingdom ID of the check. */
  checkid: string;
  /** Pingdom API key. */
  key: string;
  /** Pingdom user password. */
  passwd: string;
  /** Define whether or not the check should be running or paused. */
  state: "running" | "paused" | "started" | "stopped";
  /** Pingdom user ID. */
  uid: string;
}

export type PingdomReturn = Record<string, unknown>;

export const pingdom = defineModule<PingdomArgs, PingdomReturn>("community.general.pingdom");
