// Auto-generated from: community.general.scaleway_container_registry
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayContainerRegistryArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the container registry. */
  description?: string;
  /** Name of the container registry. */
  name: string;
  /** Default visibility policy. */
  privacy_policy?: "public" | "private";
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project_id: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Indicate desired state of the container registry. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Wait for the resource to reach its desired state before returning. */
  wait?: boolean;
  /** Time to wait before every attempt to check the state of the resource. */
  wait_sleep_time?: number;
  /** Time to wait for the resource to reach the expected state. */
  wait_timeout?: number;
}

export interface ScalewayContainerRegistryReturn {
  /** The container registry information. */
  container_registry?: Record<string, unknown>;
}

export const scaleway_container_registry = defineModule<ScalewayContainerRegistryArgs, ScalewayContainerRegistryReturn>("community.general.scaleway_container_registry");
