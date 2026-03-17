// Auto-generated from: community.general.consul_acl_bootstrap
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulAclBootstrapArgs {
  /** The secret to be used as secret ID for the initial token. */
  bootstrap_secret?: string;
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Whether the token should be present or absent. */
  state?: "present" | "bootstrapped";
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulAclBootstrapReturn {
  /** The bootstrap result as returned by the Consul HTTP API. */
  result?: Record<string, unknown>;
}

export const consul_acl_bootstrap = defineModule<ConsulAclBootstrapArgs, ConsulAclBootstrapReturn>("community.general.consul_acl_bootstrap");
