// Auto-generated from: community.general.oneandone_private_network
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneandonePrivateNetworkArgs {
  /** List of server identifiers (name or id) to be added to the private network. */
  add_members?: string | string[];
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** Authenticating API token provided by 1&1. */
  auth_token?: string;
  /** The identifier of the datacenter where the private network is created. */
  datacenter?: "US" | "ES" | "DE" | "GB";
  /** Set a description for the network. */
  description?: string;
  /** Private network name used with present state. Used as identifier (id or name) when used with absent state. */
  name?: string;
  /** Set a private network space, for example V(192.168.1.0). */
  network_address?: string;
  /** The identifier (id or name) of the network used with update state. */
  private_network?: string;
  /** List of server identifiers (name or id) to be removed from the private network. */
  remove_members?: string | string[];
  /** Define a network's state to create, remove, or update. */
  state?: "present" | "absent" | "update";
  /** Set the netmask for the private network, for example V(255.255.255.0). */
  subnet_mask?: string;
  /** Wait for the instance to be in state 'running' before returning. */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the _wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandonePrivateNetworkReturn {
  /** Information about the private network. */
  private_network?: Record<string, unknown>;
}

export const oneandone_private_network = defineModule<OneandonePrivateNetworkArgs, OneandonePrivateNetworkReturn>("community.general.oneandone_private_network");
