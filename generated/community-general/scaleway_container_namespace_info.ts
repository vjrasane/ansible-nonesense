// Auto-generated from: community.general.scaleway_container_namespace_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayContainerNamespaceInfoArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name of the container namespace. */
  name: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project_id: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example C(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayContainerNamespaceInfoReturn {
  /** The container namespace information. */
  container_namespace?: Record<string, unknown>;
}

export const scaleway_container_namespace_info = defineModule<ScalewayContainerNamespaceInfoArgs, ScalewayContainerNamespaceInfoReturn>("community.general.scaleway_container_namespace_info");
