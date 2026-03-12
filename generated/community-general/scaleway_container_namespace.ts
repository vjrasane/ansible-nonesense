// Auto-generated from: community.general.scaleway_container_namespace
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayContainerNamespaceArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Description of the container namespace. */
  description?: string;
  /** Environment variables of the container namespace. */
  environment_variables?: Record<string, unknown>;
  /** Name of the container namespace. */
  name: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Project identifier. */
  project_id: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Secret environment variables of the container namespace. */
  secret_environment_variables?: Record<string, unknown>;
  /** Indicate desired state of the container namespace. */
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

export interface ScalewayContainerNamespaceReturn {
  /** The container namespace information. */
  container_namespace?: Record<string, unknown>;
}

export const scaleway_container_namespace = defineModule<ScalewayContainerNamespaceArgs, ScalewayContainerNamespaceReturn>("community.general.scaleway_container_namespace");
