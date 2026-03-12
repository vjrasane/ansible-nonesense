// Auto-generated from: community.general.manageiq_alert_profiles
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ManageiqAlertProfilesArgs {
  /** List of alert descriptions to assign to this profile. */
  alerts?: string | string[];
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The unique alert profile name in ManageIQ. */
  name: string;
  /** Optional notes for this profile. */
  notes?: string;
  /** The resource type for the alert profile in ManageIQ. Required when O(state=present). */
  resource_type?: "Vm" | "ContainerNode" | "MiqServer" | "Host" | "Storage" | "EmsCluster" | "ExtManagementSystem" | "MiddlewareServer";
  /** V(absent) - alert profile should not exist, */
  state?: "absent" | "present";
}

export type ManageiqAlertProfilesReturn = Record<string, unknown>;

export const manageiq_alert_profiles = defineModule<ManageiqAlertProfilesArgs, ManageiqAlertProfilesReturn>("community.general.manageiq_alert_profiles");
