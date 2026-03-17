// Auto-generated from: community.general.pagerduty_change
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PagerdutyChangeArgs {
  /** The environment name, typically V(production), V(staging), and so on. */
  environment?: string;
  /** The integration key that identifies the service the change was made to. This can be found by adding an integration to a service in PagerDuty. */
  integration_key: string;
  /** Descriptive text for a URL where more information about the deployment can be obtained. */
  link_text?: string;
  /** A URL where more information about the deployment can be obtained. */
  link_url?: string;
  /** The URL of the project repository. */
  repo?: string;
  /** An identifier of the revision being deployed, typically a number or SHA from a version control system. */
  revision?: string;
  /** The source of the change event. */
  source?: string;
  /** A short description of the change that occurred. */
  summary: string;
  /** URL to submit the change event to. */
  url?: string;
  /** The name of the user or process that triggered this deployment. */
  user?: string;
  /** If V(false), SSL certificates for the target URL are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type PagerdutyChangeReturn = Record<string, unknown>;

export const pagerduty_change = defineModule<PagerdutyChangeArgs, PagerdutyChangeReturn>("community.general.pagerduty_change");
