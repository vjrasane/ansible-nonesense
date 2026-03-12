// Auto-generated from: community.general.scaleway_function
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayFunctionArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the function. */
  description?: string;
  /** Environment variables of the function. */
  environment_variables?: Record<string, unknown>;
  /** The length of time your handler can spend processing a request before being stopped. */
  function_timeout?: string;
  /** The C(module-name.export) value in your function. */
  handler?: string;
  /** Maximum number of replicas for the function. */
  max_scale?: number;
  /** Resources define performance characteristics of your function. */
  memory_limit?: number;
  /** Minimum number of replicas for the function. */
  min_scale?: number;
  /** Name of the function. */
  name: string;
  /** Function namespace identifier. */
  namespace_id: string;
  /** Privacy policies define whether a function can be executed anonymously. */
  privacy?: "public" | "private";
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Redeploy the function if update is required. */
  redeploy?: boolean;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Runtime of the function. */
  runtime: string;
  /** Secret environment variables of the function. */
  secret_environment_variables?: Record<string, unknown>;
  /** Indicate desired state of the function. */
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

export interface ScalewayFunctionReturn {
  /** The function information. */
  function?: Record<string, unknown>;
}

export const scaleway_function = defineModule<ScalewayFunctionArgs, ScalewayFunctionReturn>("community.general.scaleway_function");
