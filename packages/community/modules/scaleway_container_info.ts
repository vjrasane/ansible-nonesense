// Auto-generated from: community.general.scaleway_container_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayContainerInfoArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name of the container. */
  name: string;
  /** Container namespace identifier. */
  namespace_id: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example C(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayContainerInfoReturn {
  /** The container information. */
  container?: Record<string, unknown>;
}

export const scaleway_container_info = defineModule<ScalewayContainerInfoArgs, ScalewayContainerInfoReturn>("community.general.scaleway_container_info");
