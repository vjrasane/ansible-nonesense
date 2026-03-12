// Auto-generated from: community.general.manageiq_tenant
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ManageiqTenantArgs {
  /** The tenant description. */
  description: string;
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The tenant name. */
  name: string;
  /** The name of the parent tenant. If not supplied and no O(parent_id) is supplied the root tenant is used. */
  parent?: string;
  /** The ID of the parent tenant. If not supplied the root tenant is used. */
  parent_id?: number;
  /** The tenant quotas. */
  quotas?: Record<string, unknown>;
  /** V(absent) - tenant should not exist, */
  state?: "absent" | "present";
}

export interface ManageiqTenantReturn {
  /** The tenant. */
  tenant?: unknown;
}

export const manageiq_tenant = defineModule<ManageiqTenantArgs, ManageiqTenantReturn>("community.general.manageiq_tenant");
