// Auto-generated from: community.general.monit
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MonitArgs {
  /** The name of the C(monit) program/process to manage. */
  name: string;
  /** The state of service. */
  state: "present" | "started" | "stopped" | "restarted" | "monitored" | "unmonitored" | "reloaded";
  /** If there are pending actions for the service monitored by monit, then it checks for up to this many seconds to verify the requested action has been performed. The module sleeps for five seconds between each check. */
  timeout?: number;
}

export type MonitReturn = Record<string, unknown>;

export const monit = defineModule<MonitArgs, MonitReturn>("community.general.monit");
