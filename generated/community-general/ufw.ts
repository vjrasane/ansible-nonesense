// Auto-generated from: community.general.ufw
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UfwArgs {
  /** Add a comment to the rule. Requires UFW version >=0.35. */
  comment?: string;
  /** Change the default policy for incoming or outgoing traffic. */
  default?: "allow" | "deny" | "reject";
  /** Delete rule. */
  delete?: boolean;
  /** Select direction for a rule or default policy command. Mutually exclusive with O(interface_in) and O(interface_out). */
  direction?: "in" | "incoming" | "out" | "outgoing" | "routed";
  /** Source IP address. */
  from_ip?: string;
  /** Source port. */
  from_port?: string;
  /** Insert the corresponding rule as rule number NUM. */
  insert?: number;
  /** Allows to interpret the index in O(insert) relative to a position. */
  insert_relative_to?: "first-ipv4" | "first-ipv6" | "last-ipv4" | "last-ipv6" | "zero";
  /** Specify interface for the rule. The direction (in or out) used for the interface depends on the value of O(direction). See O(interface_in) and O(interface_out) for routed rules that needs to supply both an input and output interface. Mutually exclusive with O(interface_in) and O(interface_out). */
  interface?: string;
  /** Specify input interface for the rule. This is mutually exclusive with O(direction) and O(interface). However, it is compatible with O(interface_out) for routed rules. */
  interface_in?: string;
  /** Specify output interface for the rule. This is mutually exclusive with O(direction) and O(interface). However, it is compatible with O(interface_in) for routed rules. */
  interface_out?: string;
  /** Log new connections matched to this rule. */
  log?: boolean;
  /** Toggles logging. Logged packets use the LOG_KERN syslog facility. */
  logging?: "on" | "off" | "low" | "medium" | "high" | "full";
  /** Use profile located in C(/etc/ufw/applications.d). */
  name?: string;
  /** TCP/IP protocol. */
  proto?: "any" | "tcp" | "udp" | "ipv6" | "esp" | "ah" | "gre" | "igmp" | "vrrp";
  /** Apply the rule to routed/forwarded packets. */
  route?: boolean;
  /** Add firewall rule. */
  rule?: "allow" | "deny" | "limit" | "reject";
  /** V(enabled) reloads firewall and enables firewall on boot. */
  state?: "disabled" | "enabled" | "reloaded" | "reset";
  /** Destination IP address. */
  to_ip?: string;
  /** Destination port. */
  to_port?: string;
}

export type UfwReturn = Record<string, unknown>;

export const ufw = defineModule<UfwArgs, UfwReturn>("community.general.ufw");
