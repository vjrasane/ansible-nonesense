// Auto-generated from: community.general.manageiq_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ManageiqGroupArgs {
  /** A list of strings with a reference to the allowed host, cluster or folder. */
  belongsto_filters?: string | string[];
  /** In merge mode existing settings are merged with the supplied O(belongsto_filters). */
  belongsto_filters_merge_mode?: "merge" | "replace";
  /** The group description. */
  description: string;
  /** The tag values per category. */
  managed_filters?: Record<string, unknown>;
  /** In V(merge) mode existing categories are kept or updated, new categories are added. */
  managed_filters_merge_mode?: "merge" | "replace";
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The the group role name. */
  role?: string;
  /** The the group role ID. */
  role_id?: number;
  /** V(absent) - group should not exist, */
  state?: "absent" | "present";
  /** The tenant for the group identified by the tenant name. */
  tenant?: string;
  /** The tenant for the group identified by the tenant ID. */
  tenant_id?: number;
}

export interface ManageiqGroupReturn {
  /** The group. */
  group?: unknown;
}

export const manageiq_group = defineModule<ManageiqGroupArgs, ManageiqGroupReturn>("community.general.manageiq_group");
