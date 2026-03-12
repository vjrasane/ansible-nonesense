// Auto-generated from: community.general.datadog_downtime
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DatadogDowntimeArgs {
  /** The URL to the Datadog API. */
  api_host?: string;
  /** Your Datadog API key. */
  api_key: string;
  /** Your Datadog app key. */
  app_key: string;
  /** A message to include with notifications for this downtime. */
  downtime_message?: string;
  /** POSIX timestamp to end the downtime. If not provided, the downtime is in effect until you cancel it. */
  end?: number;
  /** The identifier of the downtime. */
  id?: number;
  /** The ID of the monitor to mute. If not provided, the downtime applies to all monitors. */
  monitor_id?: number;
  /** A list of monitor tags to which the downtime applies. */
  monitor_tags?: string | string[];
  /** The C(RRULE) standard for defining recurring events. */
  rrule?: string;
  /** A list of scopes to which the downtime applies. */
  scope?: string | string[];
  /** POSIX timestamp to start the downtime. If not provided, the downtime starts the moment it is created. */
  start?: number;
  /** The designated state of the downtime. */
  state?: "present" | "absent";
  /** The timezone for the downtime. */
  timezone?: string;
}

export interface DatadogDowntimeReturn {
  /** The downtime returned by the API. */
  downtime?: Record<string, unknown>;
}

export const datadog_downtime = defineModule<DatadogDowntimeArgs, DatadogDowntimeReturn>("community.general.datadog_downtime");
