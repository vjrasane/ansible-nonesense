// Auto-generated from: community.general.consul_auth_method
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ConsulAuthMethodArgs {
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** The raw configuration to use for the chosen auth method. */
  config?: Record<string, unknown>;
  /** Free form human readable description of the auth method. */
  description?: string;
  /** An optional name to use instead of O(name) when displaying information about this auth method. */
  display_name?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** This specifies the maximum life of any token created by this auth method. */
  max_token_ttl?: string;
  /** Specifies a name for the ACL auth method. */
  name: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Whether the token should be present or absent. */
  state?: "present" | "absent";
  /** The token to use for authorization. */
  token?: string;
  /** Defines the kind of token that this auth method should produce. */
  token_locality?: "local" | "global";
  /** The type of auth method being configured. */
  type?: "kubernetes" | "jwt" | "oidc" | "aws-iam";
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulAuthMethodReturn {
  /** The auth method as returned by the Consul HTTP API. */
  auth_method?: Record<string, unknown>;
  /** The operation performed. */
  operation?: string;
}

export const consul_auth_method = defineModule<ConsulAuthMethodArgs, ConsulAuthMethodReturn>("community.general.consul_auth_method");
