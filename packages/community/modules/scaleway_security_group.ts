// Auto-generated from: community.general.scaleway_security_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewaySecurityGroupArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the Security Group. */
  description?: string;
  /** Default policy for incoming traffic. */
  inbound_default_policy?: "accept" | "drop";
  /** Name of the Security Group. */
  name: string;
  /** Organization identifier. */
  organization?: string;
  /** Create security group to be the default one. */
  organization_default?: boolean;
  /** Default policy for outcoming traffic. */
  outbound_default_policy?: "accept" | "drop";
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(par1)). */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Indicate desired state of the Security Group. */
  state?: "absent" | "present";
  /** Create a stateful security group which allows established connections in and out. */
  stateful: boolean;
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewaySecurityGroupReturn {
  /** This is only present when O(state=present). */
  data?: Record<string, unknown>;
}

export const scaleway_security_group = defineModule<ScalewaySecurityGroupArgs, ScalewaySecurityGroupReturn>("community.general.scaleway_security_group");
