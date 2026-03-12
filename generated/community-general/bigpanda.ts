// Auto-generated from: community.general.bigpanda
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface BigpandaArgs {
  /** The name of the component being deployed. Ex: V(billing). */
  component: string;
  /** Message about the deployment. */
  deployment_message?: string;
  /** Free text description of the deployment. */
  description?: string;
  /** The environment name, typically V(production), V(staging), and so on. */
  env?: string;
  /** Name of affected host name. Can be a list. */
  hosts?: string;
  /** The person responsible for the deployment. */
  owner?: string;
  /** Source system used in the requests to the API. */
  source_system?: string;
  /** State of the deployment. */
  state: "started" | "finished" | "failed";
  /** API token. */
  token: string;
  /** Base URL of the API server. */
  url?: string;
  /** If V(false), SSL certificates for the target URL are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** The deployment version. */
  version: string;
}

export type BigpandaReturn = Record<string, unknown>;

export const bigpanda = defineModule<BigpandaArgs, BigpandaReturn>("community.general.bigpanda");
