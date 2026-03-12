// Auto-generated from: community.general.one_vnet
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneVnetArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** A O(id) of the network you would like to manage. */
  id?: number;
  /** A O(name) of the network you would like to manage. If a network with the given name does not exist it, then is created, otherwise it is managed by this module. */
  name?: string;
  /** V(present) - state that is used to manage the network. */
  state?: "present" | "absent";
  /** A string containing the network template contents. */
  template?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Time to wait for the desired state to be reached before timeout, in seconds. */
  wait_timeout?: number;
}

export interface OneVnetReturn {
  /** The network's list of ar_pool. */
  ar_pool?: string | string[];
  /** The network's bridge interface. */
  bridge?: string;
  /** The network's bridge type. */
  bridge_type?: string;
  /** The network's clusters. */
  clusters?: string | string[];
  /** The network's group ID. */
  group_id?: number;
  /** The network's group name. */
  group_name?: string;
  /** The network ID. */
  id?: number;
  /** The network name. */
  name?: string;
  /** The network's outer VLAN tag. */
  outer_vlan_id?: number;
  /** The network's owner ID. */
  owner_id?: number;
  /** The network's owner name. */
  owner_name?: string;
  /** The network's parent network ID. */
  parent_network_id?: number;
  /** The network's permissions. */
  permissions?: Record<string, unknown>;
  /** The network's physical device (NIC). */
  phydev?: string;
  /** The parsed network template. */
  template?: Record<string, unknown>;
  /** The network's user name. */
  user_id?: number;
  /** The network's user ID. */
  user_name?: string;
  /** The network's VLAN tag. */
  vlan_id?: number;
  /** The network's VN_MAD. */
  vn_mad?: string;
  /** The network's list of virtual routers IDs. */
  vrouters?: string | string[];
}

export const one_vnet = defineModule<OneVnetArgs, OneVnetReturn>("community.general.one_vnet");
