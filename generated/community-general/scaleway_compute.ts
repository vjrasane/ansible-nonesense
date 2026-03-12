// Auto-generated from: community.general.scaleway_compute
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayComputeArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Commercial name of the compute node. */
  commercial_type: string;
  /** Enable public IPv6 connectivity on the instance. */
  enable_ipv6?: boolean;
  /** Image identifier used to start the instance with. */
  image: string;
  /** Name of the instance. */
  name?: string;
  /** Organization identifier. */
  organization?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project?: string;
  /** Manage public IP on a Scaleway server. */
  public_ip?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway compute zone. */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Security group unique identifier. */
  security_group?: string;
  /** Indicate desired state of the instance. */
  state?: "present" | "absent" | "running" | "restarted" | "stopped";
  /** List of tags to apply to the instance (5 max). */
  tags?: string | string[];
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Wait for the instance to reach its desired state before returning. */
  wait?: boolean;
  /** Time to wait before every attempt to check the state of the server. */
  wait_sleep_time?: number;
  /** Time to wait for the server to reach the expected state. */
  wait_timeout?: number;
}

export type ScalewayComputeReturn = Record<string, unknown>;

export const scaleway_compute = defineModule<ScalewayComputeArgs, ScalewayComputeReturn>("community.general.scaleway_compute");
