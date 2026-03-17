// Auto-generated from: community.general.manageiq_policies_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ManageiqPoliciesInfoArgs {
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The ID of the resource to obtain the profile for. */
  resource_id?: number;
  /** The name of the resource to obtain the profile for. */
  resource_name?: string;
  /** The type of the resource to obtain the profile for. */
  resource_type: "provider" | "host" | "vm" | "blueprint" | "category" | "cluster" | "data store" | "group" | "resource pool" | "service" | "service template" | "template" | "tenant" | "user";
}

export interface ManageiqPoliciesInfoReturn {
  /** List current policy_profile and policies for a provider in ManageIQ. */
  profiles?: Record<string, unknown> | Record<string, unknown>[];
}

export const manageiq_policies_info = defineModule<ManageiqPoliciesInfoArgs, ManageiqPoliciesInfoReturn>("community.general.manageiq_policies_info");
