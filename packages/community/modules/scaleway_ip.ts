// Auto-generated from: community.general.scaleway_ip
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayIpArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** ID of the Scaleway IP (UUID). */
  id?: string;
  /** Scaleway organization identifier. */
  organization?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example par1). */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Reverse to assign to the IP. */
  reverse?: string;
  /** ID of the server you want to attach an IP to. */
  server?: string;
  /** Indicate desired state of the IP. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayIpReturn {
  /** This is only present when O(state=present). */
  data?: Record<string, unknown>;
}

export const scaleway_ip = defineModule<ScalewayIpArgs, ScalewayIpReturn>("community.general.scaleway_ip");
