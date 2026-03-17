// Auto-generated from: community.general.scaleway_function_namespace_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayFunctionNamespaceInfoArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name of the function namespace. */
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

export interface ScalewayFunctionNamespaceInfoReturn {
  /** The function namespace information. */
  function_namespace?: Record<string, unknown>;
}

export const scaleway_function_namespace_info = defineModule<ScalewayFunctionNamespaceInfoArgs, ScalewayFunctionNamespaceInfoReturn>("community.general.scaleway_function_namespace_info");
