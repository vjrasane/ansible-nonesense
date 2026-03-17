// Auto-generated from: community.general.pagerduty
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PagerdutyArgs {
  /** Short description of maintenance window. */
  desc?: string;
  /** Length of maintenance window in hours. */
  hours?: string;
  /** Maintenance window in minutes (this is added to the hours). */
  minutes?: string;
  /** PagerDuty unique subdomain. Obsolete. It is not used with PagerDuty REST v2 API. */
  name?: string;
  /** ID of user making the request. Only needed when creating a maintenance_window. */
  requester_id?: string;
  /** A comma separated list of PagerDuty service IDs. */
  service?: string | string[];
  /** Create a maintenance window or get a list of ongoing windows. */
  state: "running" | "started" | "ongoing" | "absent";
  /** A pagerduty token, generated on the pagerduty site. It is used for authorization. */
  token: string;
  /** PagerDuty user ID. Obsolete. Please, use O(token) for authorization. */
  user?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** ID of maintenance window. Only needed when absent a maintenance_window. */
  window_id?: string;
}

export type PagerdutyReturn = Record<string, unknown>;

export const pagerduty = defineModule<PagerdutyArgs, PagerdutyReturn>("community.general.pagerduty");
