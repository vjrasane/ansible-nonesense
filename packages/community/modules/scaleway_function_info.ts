// Auto-generated from: community.general.scaleway_function_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayFunctionInfoArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name of the function. */
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

export interface ScalewayFunctionInfoReturn {
  /** The function information. */
  function?: Record<string, unknown>;
}

export const scaleway_function_info = defineModule<ScalewayFunctionInfoArgs, ScalewayFunctionInfoReturn>("community.general.scaleway_function_info");
