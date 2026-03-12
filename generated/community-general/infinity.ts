// Auto-generated from: community.general.infinity
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface InfinityArgs {
  /** Action to perform. */
  action: "add_network" | "delete_network" | "get_network" | "get_network_id" | "release_ip" | "release_network" | "reserve_network" | "reserve_next_available_ip";
  /** IP Address for a reservation or a release. */
  ip_address?: string;
  /** Network address with CIDR format (for example V(192.168.310.0)). */
  network_address?: string;
  /** Network family defined by Infinity, for example V(IPv4), V(IPv6) and V(Dual stack). */
  network_family?: "4" | "6" | "dual";
  /** Network ID. */
  network_id?: string;
  /** The parent network ID for a given network. */
  network_location?: number;
  /** The name of a network. */
  network_name?: string;
  /** Network bitmask (for example V(255.255.255.220) or CIDR format V(/26)). */
  network_size?: string;
  /** Network type defined by Infinity. */
  network_type?: "lan" | "shared_lan" | "supernet";
  /** Infinity password. */
  password: string;
  /** Infinity server_ip with IP address. */
  server_ip: string;
  /** Username to access Infinity. */
  username: string;
}

export interface InfinityReturn {
  /** When reserve next available IP address from a network, the IP address info is returned. */
  ip_info?: string;
  /** ID for a given network. */
  network_id?: string;
  /** When reserving a LAN network from a Infinity supernet by providing network_size, the information about the reserved network is returned. */
  network_info?: string;
}

export const infinity = defineModule<InfinityArgs, InfinityReturn>("community.general.infinity");
