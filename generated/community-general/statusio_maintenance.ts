// Auto-generated from: community.general.statusio_maintenance
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface StatusioMaintenanceArgs {
  /** If it affects all components and containers. */
  all_infrastructure_affected?: boolean;
  /** Your unique API ID from status.io. */
  api_id: string;
  /** Your unique API Key from status.io. */
  api_key: string;
  /** Automatically start and end the maintenance window. */
  automation?: boolean;
  /** The given name of your component (server name). */
  components?: string | string[];
  /** The given name of your container (data center). */
  containers?: string | string[];
  /** Message describing the maintenance window. */
  desc?: string;
  /** The maintenance ID number when deleting a maintenance window. */
  maintenance_id?: string;
  /** Notify subscribers 1 hour before maintenance start time. */
  maintenance_notify_1_hr?: boolean;
  /** Notify subscribers 24 hours before maintenance start time. */
  maintenance_notify_24_hr?: boolean;
  /** Notify subscribers 72 hours before maintenance start time. */
  maintenance_notify_72_hr?: boolean;
  /** Notify subscribers now. */
  maintenance_notify_now?: boolean;
  /** The duration of the maintenance window (starting from playbook runtime). */
  minutes?: number;
  /** Date maintenance is expected to start (Month/Day/Year) (UTC). */
  start_date?: string;
  /** Time maintenance is expected to start (Hour:Minutes) (UTC). */
  start_time?: string;
  /** Desired state of the package. */
  state?: "present" | "absent";
  /** Your unique StatusPage ID from status.io. */
  statuspage: string;
  /** A descriptive title for the maintenance window. */
  title?: string;
  /** Status.io API URL. A private apiary can be used instead. */
  url?: string;
}

export type StatusioMaintenanceReturn = Record<string, unknown>;

export const statusio_maintenance = defineModule<StatusioMaintenanceArgs, StatusioMaintenanceReturn>("community.general.statusio_maintenance");
