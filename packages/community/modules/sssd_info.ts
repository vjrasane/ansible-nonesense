// Auto-generated from: community.general.sssd_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SssdInfoArgs {
  /** The action to perform. */
  action: "active_servers" | "domain_list" | "domain_status" | "list_servers";
  /** Domain name to check. */
  domain?: string;
  /** Required parameter when O(action=active_servers) and O(action=list_servers). */
  server_type?: "IPA" | "AD";
}

export interface SssdInfoReturn {
  /** List of SSSD domains. */
  domain_list?: string | string[];
  /** List of servers for the specified domain. */
  list_servers?: string | string[];
  /** The online status of the SSSD domain. */
  online?: string;
  /** Active servers for the specified domain and type. */
  servers?: Record<string, unknown>;
}

export const sssd_info = defineModule<SssdInfoArgs, SssdInfoReturn>("community.general.sssd_info");
