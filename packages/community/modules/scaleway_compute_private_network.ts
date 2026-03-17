// Auto-generated from: community.general.scaleway_compute_private_network
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayComputePrivateNetworkArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** ID of the compute instance (see M(community.general.scaleway_compute)). */
  compute_id: string;
  /** ID of the private network (see M(community.general.scaleway_private_network)). */
  private_network_id: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(par1)). */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Indicate desired state of the VPC. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayComputePrivateNetworkReturn {
  /** Information on the VPC. */
  scaleway_compute_private_network?: Record<string, unknown>;
}

export const scaleway_compute_private_network = defineModule<ScalewayComputePrivateNetworkArgs, ScalewayComputePrivateNetworkReturn>("community.general.scaleway_compute_private_network");
