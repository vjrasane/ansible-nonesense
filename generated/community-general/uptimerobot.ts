// Auto-generated from: community.general.uptimerobot
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UptimerobotArgs {
  /** Uptime Robot API key. */
  apikey: string;
  /** ID of the monitor to check. */
  monitorid: string;
  /** Define whether or not the monitor should be running or paused. */
  state: "started" | "paused";
}

export type UptimerobotReturn = Record<string, unknown>;

export const uptimerobot = defineModule<UptimerobotArgs, UptimerobotReturn>("community.general.uptimerobot");
