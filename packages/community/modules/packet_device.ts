// Auto-generated from: community.general.packet_device
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacketDeviceArgs {
  /** Persist PXE as the first boot option. */
  always_pxe?: boolean;
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** The number of devices to create. Count number can be included in hostname using the C(%d) string formatter. */
  count?: number;
  /** From which number to start the count. */
  count_offset?: number;
  /** List of device IDs on which to operate. */
  device_ids?: string | string[];
  /** Facility slug for device creation. See Packet API for current list - U(https://www.packet.net/developers/api/facilities/). */
  facility?: string;
  /** Dict with "features" for device creation. See Packet API docs for details. */
  features?: Record<string, unknown>;
  /** A hostname of a device, or a list of hostnames. */
  hostnames?: string | string[];
  /** URL of custom iPXE script for provisioning. */
  ipxe_script_url?: string;
  /** Whether to lock a created device. */
  locked?: boolean;
  /** OS slug for device creation. See Packet API for current list - U(https://www.packet.net/developers/api/operatingsystems/). */
  operating_system?: string;
  /** Plan slug for device creation. See Packet API for current list - U(https://www.packet.net/developers/api/plans/). */
  plan?: string;
  /** ID of project of the device. */
  project_id: string;
  /** Desired state of the device. */
  state?: "present" | "absent" | "active" | "inactive" | "rebooted";
  /** List of device tags. */
  tags?: string | string[];
  /** Userdata blob made available to the machine. */
  user_data?: string;
  /** Whether to wait for the instance to be assigned a public IPv4/IPv6 address. */
  wait_for_public_IPv?: number;
  /** How long (seconds) to wait either for automatic IP address assignment, or for the device to reach the V(active) state. */
  wait_timeout?: number;
}

export interface PacketDeviceReturn {
  /** Information about each device that was processed. */
  devices?: string | string[];
}

export const packet_device = defineModule<PacketDeviceArgs, PacketDeviceReturn>("community.general.packet_device");
