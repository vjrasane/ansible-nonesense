// Auto-generated from: community.general.scaleway_lb
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayLbArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the load-balancer. */
  description: string;
  /** Name of the load-balancer. */
  name: string;
  /** Organization identifier. */
  organization_id: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway zone. */
  region: "nl-ams" | "fr-par" | "pl-waw";
  /** Indicate desired state of the instance. */
  state?: "present" | "absent";
  /** List of tags to apply to the load-balancer. */
  tags?: string | string[];
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Wait for the load-balancer to reach its desired state before returning. */
  wait?: boolean;
  /** Time to wait before every attempt to check the state of the load-balancer. */
  wait_sleep_time?: number;
  /** Time to wait for the load-balancer to reach the expected state. */
  wait_timeout?: number;
}

export interface ScalewayLbReturn {
  /** The load-balancer object. */
  scaleway_lb?: Record<string, unknown>;
}

export const scaleway_lb = defineModule<ScalewayLbArgs, ScalewayLbReturn>("community.general.scaleway_lb");
