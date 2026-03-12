// Auto-generated from: community.general.oneandone_monitoring_policy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneandoneMonitoringPolicyArgs {
  /** Ports to add to the monitoring policy. */
  add_ports?: Record<string, unknown> | Record<string, unknown>[];
  /** Processes to add to the monitoring policy. */
  add_processes?: Record<string, unknown> | Record<string, unknown>[];
  /** Servers to add to the monitoring policy. */
  add_servers?: string | string[];
  /** Set true for using agent. */
  agent?: string;
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** Authenticating API token provided by 1&1. */
  auth_token?: string;
  /** Monitoring policy description. maxLength=256. */
  description?: string;
  /** User's email. maxLength=128. */
  email?: string;
  /** The identifier (id or name) of the monitoring policy used with update state. */
  monitoring_policy?: string;
  /** Monitoring policy name used with present state. Used as identifier (id or name) when used with absent state. maxLength=128. */
  name?: string;
  /** Array of ports that are to be monitored. */
  ports?: Record<string, unknown> | Record<string, unknown>[];
  /** Array of processes that are to be monitored. */
  processes?: Record<string, unknown> | Record<string, unknown>[];
  /** Ports to remove from the monitoring policy. */
  remove_ports?: string | string[];
  /** Processes to remove from the monitoring policy. */
  remove_processes?: string | string[];
  /** Servers to remove from the monitoring policy. */
  remove_servers?: string | string[];
  /** Define a monitoring policy's state to create, remove, update. */
  state?: "present" | "absent" | "update";
  /** Monitoring policy thresholds. Each of the suboptions have warning and critical, which both have alert and value suboptions. Warning is used to set limits for warning alerts, critical is used to set critical alerts. alert enables alert, and value is used to advise when the value is exceeded. */
  thresholds?: Record<string, unknown> | Record<string, unknown>[];
  /** Ports to be updated on the monitoring policy. */
  update_ports?: Record<string, unknown> | Record<string, unknown>[];
  /** Processes to be updated on the monitoring policy. */
  update_processes?: Record<string, unknown> | Record<string, unknown>[];
  /** Wait for the instance to be in state 'running' before returning. */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the _wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandoneMonitoringPolicyReturn {
  /** Information about the monitoring policy that was processed. */
  monitoring_policy?: Record<string, unknown>;
}

export const oneandone_monitoring_policy = defineModule<OneandoneMonitoringPolicyArgs, OneandoneMonitoringPolicyReturn>("community.general.oneandone_monitoring_policy");
