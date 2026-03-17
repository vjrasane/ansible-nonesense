// Auto-generated from: community.general.consul_binding_rule
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulBindingRuleArgs {
  /** The name of the auth method that this rule applies to. */
  auth_method: string;
  /** The name to bind to a token at login-time. */
  bind_name?: string;
  /** Specifies the way the binding rule affects a token created at login. */
  bind_type?: "service" | "node" | "role" | "templated-policy";
  /** Specifies the templated policy variables when O(bind_type) is set to V(templated-policy). */
  bind_vars?: Record<string, unknown>;
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Free form human readable description of the binding rule. */
  description?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** Specifies a name for the binding rule. */
  name: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Specifies the expression used to match this rule against valid identities returned from an auth method validation. */
  selector?: string;
  /** Whether the binding rule should be present or absent. */
  state?: "present" | "absent";
  /** The token to use for authorization. */
  token?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulBindingRuleReturn {
  /** The binding rule as returned by the Consul HTTP API. */
  binding_rule?: Record<string, unknown>;
  /** The operation performed. */
  operation?: string;
}

export const consul_binding_rule = defineModule<ConsulBindingRuleArgs, ConsulBindingRuleReturn>("community.general.consul_binding_rule");
