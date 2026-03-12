// Auto-generated from: community.general.scaleway_security_group_rule
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewaySecurityGroupRuleArgs {
  /** Rule action. */
  action: "accept" | "drop";
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Rule direction. */
  direction: "inbound" | "outbound";
  /** IPV4 CIDR notation to apply to the rule. */
  ip_range?: string;
  /** Port related to the rule, null value for all the ports. */
  port: number;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Network protocol to use. */
  protocol: "TCP" | "UDP" | "ICMP";
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(par1)). */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Security Group unique identifier. */
  security_group: string;
  /** Indicate desired state of the Security Group Rule. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewaySecurityGroupRuleReturn {
  /** This is only present when O(state=present). */
  data?: Record<string, unknown>;
}

export const scaleway_security_group_rule = defineModule<ScalewaySecurityGroupRuleArgs, ScalewaySecurityGroupRuleReturn>("community.general.scaleway_security_group_rule");
