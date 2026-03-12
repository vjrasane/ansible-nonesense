// Auto-generated from: community.general.manageiq_alerts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ManageiqAlertsArgs {
  /** The unique alert description in ManageIQ. */
  description?: string;
  /** Enable or disable the alert. Required if O(state=present). */
  enabled?: boolean;
  /** The alert expression for ManageIQ. */
  expression?: Record<string, unknown>;
  /** Expression type. */
  expression_type?: "hash" | "miq";
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** Additional alert options, such as notification type and frequency. */
  options?: Record<string, unknown>;
  /** The entity type for the alert in ManageIQ. Required when O(state=present). */
  resource_type?: "Vm" | "ContainerNode" | "MiqServer" | "Host" | "Storage" | "EmsCluster" | "ExtManagementSystem" | "MiddlewareServer";
  /** V(absent) - alert should not exist, */
  state?: "absent" | "present";
}

export type ManageiqAlertsReturn = Record<string, unknown>;

export const manageiq_alerts = defineModule<ManageiqAlertsArgs, ManageiqAlertsReturn>("community.general.manageiq_alerts");
