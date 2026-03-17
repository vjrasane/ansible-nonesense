// Auto-generated from: community.general.manageiq_policies
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ManageiqPoliciesArgs {
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** List of dictionaries, each includes the policy_profile V(name) key. */
  policy_profiles?: Record<string, unknown> | Record<string, unknown>[];
  /** The ID of the resource to which the profile should be [un]assigned. */
  resource_id?: number;
  /** The name of the resource to which the profile should be [un]assigned. */
  resource_name?: string;
  /** The type of the resource to which the profile should be [un]assigned. */
  resource_type: "provider" | "host" | "vm" | "blueprint" | "category" | "cluster" | "data store" | "group" | "resource pool" | "service" | "service template" | "template" | "tenant" | "user";
  /** V(absent) - policy_profiles should not exist, */
  state?: "absent" | "present";
}

export interface ManageiqPoliciesReturn {
  /** List current policy_profile and policies for a provider in ManageIQ. */
  manageiq_policies?: Record<string, unknown>;
}

export const manageiq_policies = defineModule<ManageiqPoliciesArgs, ManageiqPoliciesReturn>("community.general.manageiq_policies");
