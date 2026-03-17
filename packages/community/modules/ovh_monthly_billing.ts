// Auto-generated from: community.general.ovh_monthly_billing
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OvhMonthlyBillingArgs {
  /** The applicationKey to use. */
  application_key?: string;
  /** The application secret to use. */
  application_secret?: string;
  /** The consumer key to use. */
  consumer_key?: string;
  /** The endpoint to use (for instance V(ovh-eu)). */
  endpoint?: string;
  /** ID of the instance, get it with U(https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance#GET). */
  instance_id: string;
  /** ID of the project, get it with U(https://api.ovh.com/console/#/cloud/project#GET). */
  project_id: string;
}

export type OvhMonthlyBillingReturn = Record<string, unknown>;

export const ovh_monthly_billing = defineModule<OvhMonthlyBillingArgs, OvhMonthlyBillingReturn>("community.general.ovh_monthly_billing");
