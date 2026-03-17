// Auto-generated from: community.general.packet_ip_subnet
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacketIpSubnetArgs {
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** IPv4 or IPv6 subnet which you want to manage. It must come from a reserved block for your project in the Packet Host. */
  cidr: string;
  /** The number of devices to retrieve from the project. The max allowed value is 1000. */
  device_count?: number;
  /** UUID of a device to/from which to assign/remove a subnet. */
  device_id?: string;
  /** A hostname of a device to/from which to assign/remove a subnet. */
  hostname?: string;
  /** UUID of a project of the device to/from which to assign/remove a subnet. */
  project_id?: string;
  /** Desired state of the IP subnet on the specified device. */
  state?: "present" | "absent";
}

export interface PacketIpSubnetReturn {
  /** UUID of the device associated with the specified IP address. */
  device_id?: string;
  /** Dict with data about the handled IP subnet. */
  subnet?: Record<string, unknown>;
}

export const packet_ip_subnet = defineModule<PacketIpSubnetArgs, PacketIpSubnetReturn>("community.general.packet_ip_subnet");
