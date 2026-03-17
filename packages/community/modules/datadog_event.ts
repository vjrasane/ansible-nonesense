// Auto-generated from: community.general.datadog_event
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DatadogEventArgs {
  /** An arbitrary string to use for aggregation. */
  aggregation_key?: string;
  /** Type of alert. */
  alert_type?: "error" | "warning" | "info" | "success";
  /** DataDog API endpoint URL. */
  api_host?: string;
  /** Your DataDog API key. */
  api_key: string;
  /** Your DataDog app key. */
  app_key: string;
  /** POSIX timestamp of the event. */
  date_happened?: number;
  /** Host name to associate with the event. */
  host?: string;
  /** The priority of the event. */
  priority?: "normal" | "low";
  /** Comma separated list of tags to apply to the event. */
  tags?: string | string[];
  /** The body of the event. */
  text: string;
  /** The event title. */
  title: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type DatadogEventReturn = Record<string, unknown>;

export const datadog_event = defineModule<DatadogEventArgs, DatadogEventReturn>("community.general.datadog_event");
