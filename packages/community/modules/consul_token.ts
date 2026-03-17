// Auto-generated from: community.general.consul_token
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulTokenArgs {
  /** Specifies a UUID to use as the token's Accessor ID. If not specified a UUID is generated for this field. */
  accessor_id?: string;
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Free form human readable description of the token. */
  description?: string;
  /** This is a convenience field and if set it initializes the C(expiration_time). Can be specified in the form of V(60s) or V(5m) (that is, 60 seconds or 5 minutes, respectively). Ingored when the token is updated! */
  expiration_ttl?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** If true, indicates that the token should not be replicated globally and instead be local to the current datacenter. */
  local?: boolean;
  /** List of node identities to attach to the token. */
  node_identities?: Record<string, unknown> | Record<string, unknown>[];
  /** List of policies to attach to the token. Each policy is a dict. */
  policies?: Record<string, unknown> | Record<string, unknown>[];
  /** The port on which the consul agent is running. */
  port?: number;
  /** List of roles to attach to the token. Each role is a dict. */
  roles?: Record<string, unknown> | Record<string, unknown>[];
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Specifies a UUID to use as the token's Secret ID. If not specified a UUID is generated for this field. */
  secret_id?: string;
  /** List of service identities to attach to the token. */
  service_identities?: Record<string, unknown> | Record<string, unknown>[];
  /** Whether the token should be present or absent. */
  state?: "present" | "absent";
  /** The list of templated policies that should be applied to the role. */
  templated_policies?: Record<string, unknown> | Record<string, unknown>[];
  /** The token to use for authorization. */
  token?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulTokenReturn {
  /** The operation performed. */
  operation?: string;
  /** The token as returned by the Consul HTTP API. */
  token?: Record<string, unknown>;
}

export const consul_token = defineModule<ConsulTokenArgs, ConsulTokenReturn>("community.general.consul_token");
