// Auto-generated from: community.general.packet_volume
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacketVolumeArgs {
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** Billing cycle for new volume. */
  billing_cycle?: "hourly" | "monthly";
  /** User-defined description attribute for Packet volume. */
  description?: string;
  /** Location of the volume. */
  facility?: string;
  /** UUID of a volume. */
  id?: string;
  /** Create new volume locked. */
  locked?: boolean;
  /** Selector for API-generated name of the volume. */
  name?: string;
  /** V(storage_1) for standard tier, V(storage_2) for premium (performance) tier. */
  plan?: "storage_1" | "storage_2";
  /** ID of project of the device. */
  project_id: string;
  /** Size of the volume in gigabytes. */
  size?: number;
  /** Snapshot policy for new volume. */
  snapshot_policy?: {
    snapshot_count: number;
    snapshot_frequency: "15min" | "1hour" | "1day" | "1week" | "1month" | "1year";
  };
  /** Desired state of the volume. */
  state?: "present" | "absent";
}

export interface PacketVolumeReturn {
  /** The user-defined description of the volume resource. */
  description?: string;
  /** UUID of specified volume. */
  id?: string;
  /** The API-generated name of the volume resource. */
  name?: string;
}

export const packet_volume = defineModule<PacketVolumeArgs, PacketVolumeReturn>("community.general.packet_volume");
