// Auto-generated from: community.general.pagerduty_alert
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PagerdutyAlertArgs {
  /** The pagerduty API key (readonly access), generated on the pagerduty site. */
  api_key?: string;
  /** The API version we want to use to run the module. */
  api_version?: "v1" | "v2";
  /** The name of the monitoring client that is triggering this event. */
  client?: string;
  /** The URL of the monitoring client that is triggering this event. */
  client_url?: string;
  /** Component of the source machine that is responsible for the event, for example C(mysql) or C(eth0). */
  component?: string;
  /** Additional details about the event and affected system. */
  custom_details?: Record<string, unknown>;
  /** For O(state=triggered) - Required. Short description of the problem that led to this trigger. This field (or a truncated version) is used when generating phone calls, SMS messages and alert emails. It also appears on the incidents tables in the PagerDuty UI. The maximum length is 1024 characters. */
  desc?: string;
  /** The class/type of the event, for example C(ping failure) or C(cpu load). */
  incident_class?: string;
  /** Identifies the incident to which this O(state) should be applied. */
  incident_key?: string;
  /** The GUID of one of your 'Generic API' services. */
  integration_key?: string;
  /** A short description of the O(link_url). */
  link_text?: string;
  /** Relevant link URL to the alert. For example, the website or the job link. */
  link_url?: string;
  /** PagerDuty unique subdomain. Obsolete. It is not used with PagerDuty REST v2 API. */
  name?: string;
  /** ID of PagerDuty service when incidents are triggered, acknowledged or resolved. */
  service_id?: string;
  /** The GUID of one of your 'Generic API' services. Obsolete. Please use O(integration_key). */
  service_key?: string;
  /** The perceived severity of the status the event is describing with respect to the affected system. */
  severity?: "critical" | "warning" | "error" | "info";
  /** The unique location of the affected system, preferably a hostname or FQDN. */
  source?: string;
  /** Type of event to be sent. */
  state: "triggered" | "acknowledged" | "resolved";
}

export type PagerdutyAlertReturn = Record<string, unknown>;

export const pagerduty_alert = defineModule<PagerdutyAlertArgs, PagerdutyAlertReturn>("community.general.pagerduty_alert");
