// Auto-generated from: community.general.nagios
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface NagiosArgs {
  /** Action to take. */
  action: "downtime" | "delete_downtime" | "enable_alerts" | "disable_alerts" | "silence" | "unsilence" | "silence_nagios" | "unsilence_nagios" | "command" | "servicegroup_service_downtime" | "servicegroup_host_downtime" | "acknowledge" | "forced_check";
  /** Author to leave downtime comments as. Only used when O(action) is V(downtime) or V(acknowledge). */
  author?: string;
  /** Path to the nagios I(command file) (FIFO pipe). Only required if auto-detection fails. */
  cmdfile?: string;
  /** The raw command to send to Nagios, which should not include the submitted time header or the line-feed. */
  command?: string;
  /** Comment when O(action) is V(downtime) or V(acknowledge). */
  comment?: string;
  /** Host to operate on in Nagios. */
  host?: string;
  /** Minutes to schedule downtime for. */
  minutes?: number;
  /** The Servicegroup we want to set downtimes/alerts for. */
  servicegroup?: string;
  /** What to manage downtime/alerts for. Separate multiple services with commas. */
  services?: string | string[];
  /** When downtime should start, in C(time_t) format (epoch seconds). */
  start?: string;
}

export type NagiosReturn = Record<string, unknown>;

export const nagios = defineModule<NagiosArgs, NagiosReturn>("community.general.nagios");
