// Auto-generated from: community.general.airbrake_deployment
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AirbrakeDeploymentArgs {
  /** The airbrake environment name, typically v(production), V(staging), and so on. */
  environment: string;
  /** Airbrake PROJECT_ID. */
  project_id: string;
  /** Airbrake PROJECT_KEY. */
  project_key: string;
  /** URL of the project repository. */
  repo?: string;
  /** A hash, number, tag, or other identifier showing what revision from version control was deployed. */
  revision?: string;
  /** Optional URL to submit the notification to. Use to send notifications to Airbrake-compliant tools like Errbit. */
  url?: string;
  /** The username of the person doing the deployment. */
  user?: string;
  /** If V(false), SSL certificates for the target URL is not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** A string identifying what version was deployed. */
  version?: string;
}

export type AirbrakeDeploymentReturn = Record<string, unknown>;

export const airbrake_deployment = defineModule<AirbrakeDeploymentArgs, AirbrakeDeploymentReturn>("community.general.airbrake_deployment");
