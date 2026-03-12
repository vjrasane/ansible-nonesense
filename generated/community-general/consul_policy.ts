// Auto-generated from: community.general.consul_policy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ConsulPolicyArgs {
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Description of the policy. */
  description?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** The name that should be associated with the policy, this is opaque to Consul. */
  name: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** Rule document that should be associated with the current policy. */
  rules?: string;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Whether the policy should be present or absent. */
  state?: "present" | "absent";
  /** The token to use for authorization. */
  token?: string;
  /** Valid datacenters for the policy. All if list is empty. */
  valid_datacenters?: string | string[];
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulPolicyReturn {
  /** The operation performed. */
  operation?: string;
  /** The policy as returned by the Consul HTTP API. */
  policy?: Record<string, unknown>;
}

export const consul_policy = defineModule<ConsulPolicyArgs, ConsulPolicyReturn>("community.general.consul_policy");
