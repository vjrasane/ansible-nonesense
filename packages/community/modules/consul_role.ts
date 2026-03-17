// Auto-generated from: community.general.consul_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulRoleArgs {
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Description of the role. */
  description?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** A name used to identify the role. */
  name: string;
  /** List of node identities to attach to the role. */
  node_identities?: Record<string, unknown> | Record<string, unknown>[];
  /** List of policies to attach to the role. Each policy is a dict. */
  policies?: Record<string, unknown> | Record<string, unknown>[];
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** List of service identities to attach to the role. */
  service_identities?: Record<string, unknown> | Record<string, unknown>[];
  /** Whether the role should be present or absent. */
  state?: "present" | "absent";
  /** The list of templated policies that should be applied to the role. */
  templated_policies?: Record<string, unknown> | Record<string, unknown>[];
  /** The token to use for authorization. */
  token?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulRoleReturn {
  /** The operation performed on the role. */
  operation?: string;
  /** The role object. */
  role?: Record<string, unknown>;
}

export const consul_role = defineModule<ConsulRoleArgs, ConsulRoleReturn>("community.general.consul_role");
