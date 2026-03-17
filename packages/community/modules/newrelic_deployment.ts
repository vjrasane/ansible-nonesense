// Auto-generated from: community.general.newrelic_deployment
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NewrelicDeploymentArgs {
  /** The value of C(app_name) in the C(newrelic.yml) file used by the application. */
  app_name?: string;
  /** If this flag is set to V(true) then the application ID lookup by name would only work for an exact match. If set to V(false) it returns the first result. */
  app_name_exact_match?: boolean;
  /** The application ID found in the metadata of the application in APM. */
  application_id?: string;
  /** A list of changes for this deployment. */
  changelog?: string;
  /** Text annotation for the deployment - notes for you. */
  description?: string;
  /** A revision number (for example, git commit SHA). */
  revision: string;
  /** API token to place in the Api-Key header. */
  token: string;
  /** The name of the user/process that triggered this deployment. */
  user?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type NewrelicDeploymentReturn = Record<string, unknown>;

export const newrelic_deployment = defineModule<NewrelicDeploymentArgs, NewrelicDeploymentReturn>("community.general.newrelic_deployment");
