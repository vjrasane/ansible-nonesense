// Auto-generated from: community.general.oneandone_firewall_policy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneandoneFirewallPolicyArgs {
  /** List of rules that are added to an existing firewall policy. It is syntax is the same as the one used for rules parameter. Used in combination with update state. */
  add_rules?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of server identifiers (ID or name) to be assigned to a firewall policy. Used in combination with update state. */
  add_server_ips?: string | string[];
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** Authenticating API token provided by 1&1. */
  auth_token?: string;
  /** Firewall policy description. maxLength=256. */
  description?: string;
  /** The identifier (id or name) of the firewall policy used with update state. */
  firewall_policy?: string;
  /** Firewall policy name used with present state. Used as identifier (id or name) when used with absent state. maxLength=128. */
  name?: string;
  /** List of rule IDs that are removed from an existing firewall policy. Used in combination with update state. */
  remove_rules?: string | string[];
  /** A list of server IP IDs to be unassigned from a firewall policy. Used in combination with update state. */
  remove_server_ips?: string | string[];
  /** List of rules that are set for the firewall policy. Each rule must contain protocol parameter, in addition to three optional parameters (port_from, port_to, and source). */
  rules?: Record<string, unknown> | Record<string, unknown>[];
  /** Define a firewall policy state to create, remove, or update. */
  state?: "present" | "absent" | "update";
  /** Wait for the instance to be in state 'running' before returning. */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the _wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandoneFirewallPolicyReturn {
  /** Information about the firewall policy that was processed. */
  firewall_policy?: Record<string, unknown>;
}

export const oneandone_firewall_policy = defineModule<OneandoneFirewallPolicyArgs, OneandoneFirewallPolicyReturn>("community.general.oneandone_firewall_policy");
