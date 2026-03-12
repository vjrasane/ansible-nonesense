// Auto-generated from: community.general.scaleway_function_namespace
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayFunctionNamespaceArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the function namespace. */
  description?: string;
  /** Environment variables of the function namespace. */
  environment_variables?: Record<string, unknown>;
  /** Name of the function namespace. */
  name: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project_id: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Secret environment variables of the function namespace. */
  secret_environment_variables?: Record<string, unknown>;
  /** Indicate desired state of the function namespace. */
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

export interface ScalewayFunctionNamespaceReturn {
  /** The function namespace information. */
  function_namespace?: Record<string, unknown>;
}

export const scaleway_function_namespace = defineModule<ScalewayFunctionNamespaceArgs, ScalewayFunctionNamespaceReturn>("community.general.scaleway_function_namespace");
