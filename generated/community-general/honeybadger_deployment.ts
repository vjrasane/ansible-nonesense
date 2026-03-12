// Auto-generated from: community.general.honeybadger_deployment
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HoneybadgerDeploymentArgs {
  /** The environment name, typically V(production), V(staging), and so on. */
  environment: string;
  /** URL of the project repository. */
  repo?: string;
  /** A hash, number, tag, or other identifier showing what revision was deployed. */
  revision?: string;
  /** API token. */
  token: string;
  /** Optional URL to submit the notification to. */
  url?: string;
  /** The username of the person doing the deployment. */
  user?: string;
  /** If V(false), SSL certificates for the target URL are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type HoneybadgerDeploymentReturn = Record<string, unknown>;

export const honeybadger_deployment = defineModule<HoneybadgerDeploymentArgs, HoneybadgerDeploymentReturn>("community.general.honeybadger_deployment");
