// Auto-generated from: community.general.pagerduty_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PagerdutyUserArgs {
  /** An API access token to authenticate with the PagerDuty REST API. */
  access_token: string;
  /** The user's email address. */
  pd_email: string;
  /** The user's role. */
  pd_role?: "global_admin" | "manager" | "responder" | "observer" | "stakeholder" | "limited_stakeholder" | "restricted_access";
  /** The teams to which the user belongs. */
  pd_teams?: string | string[];
  /** Name of the user in PagerDuty. */
  pd_user: string;
  /** State of the user. */
  state?: "present" | "absent";
}

export type PagerdutyUserReturn = Record<string, unknown>;

export const pagerduty_user = defineModule<PagerdutyUserArgs, PagerdutyUserReturn>("community.general.pagerduty_user");
