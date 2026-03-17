// Auto-generated from: community.general.scaleway_container
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayContainerArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** The length of time your handler can spend processing a request before being stopped. */
  container_timeout?: string;
  /** Resources define performance characteristics of your container. */
  cpu_limit?: number;
  /** Description of the container namespace. */
  description?: string;
  /** Environment variables of the container namespace. */
  environment_variables?: Record<string, unknown>;
  /** Maximum number of connections per container. */
  max_concurrency?: number;
  /** Maximum number of replicas for the container. */
  max_scale?: number;
  /** Resources define performance characteristics of your container. */
  memory_limit?: number;
  /** Minimum number of replicas for the container. */
  min_scale?: number;
  /** Name of the container namespace. */
  name: string;
  /** Container namespace identifier. */
  namespace_id: string;
  /** Listen port used to expose the container. */
  port?: number;
  /** Privacy policies define whether a container can be executed anonymously. */
  privacy?: "public" | "private";
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Communication protocol of the container. */
  protocol?: "http1" | "h2c";
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Redeploy the container if update is required. */
  redeploy?: boolean;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** The name of image used for the container. */
  registry_image: string;
  /** Secret environment variables of the container namespace. */
  secret_environment_variables?: Record<string, unknown>;
  /** Indicate desired state of the container. */
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

export interface ScalewayContainerReturn {
  /** The container information. */
  container?: Record<string, unknown>;
}

export const scaleway_container = defineModule<ScalewayContainerArgs, ScalewayContainerReturn>("community.general.scaleway_container");
