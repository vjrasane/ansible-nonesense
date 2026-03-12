// Auto-generated from: community.general.rollbar_deployment
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RollbarDeploymentArgs {
  /** Deploy comment (for example what is being deployed). */
  comment?: string;
  /** Name of the environment being deployed, for example V(production). */
  environment: string;
  /** Revision number/sha being deployed. */
  revision: string;
  /** Rollbar username of the user who deployed. */
  rollbar_user?: string;
  /** Your project access token. */
  token: string;
  /** Optional URL to submit the notification to. */
  url?: string;
  /** User who deployed. */
  user?: string;
  /** If V(false), SSL certificates for the target URL are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type RollbarDeploymentReturn = Record<string, unknown>;

export const rollbar_deployment = defineModule<RollbarDeploymentArgs, RollbarDeploymentReturn>("community.general.rollbar_deployment");
