// Auto-generated from: community.general.scaleway_user_data
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayUserDataArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway compute zone. */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Scaleway Compute instance ID of the server. */
  server_id: string;
  /** User defined data. Typically used with C(cloud-init). */
  user_data?: Record<string, unknown>;
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export type ScalewayUserDataReturn = Record<string, unknown>;

export const scaleway_user_data = defineModule<ScalewayUserDataArgs, ScalewayUserDataReturn>("community.general.scaleway_user_data");
