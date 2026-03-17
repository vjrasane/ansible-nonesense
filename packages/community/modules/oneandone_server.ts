// Auto-generated from: community.general.oneandone_server
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneandoneServerArgs {
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** The operating system name or ID for the server. It is required only for 'present' state. */
  appliance?: string;
  /** Authenticating API token provided by 1&1. Overrides the E(ONEANDONE_AUTH_TOKEN) environment variable. */
  auth_token?: string;
  /** When creating multiple servers at once, whether to differentiate hostnames by appending a count after them or substituting the count where there is a %02d or %03d in the hostname string. */
  auto_increment?: boolean;
  /** The number of cores per processor. It must be provided with O(vcore), O(ram), and O(hdds) parameters. */
  cores_per_processor?: number;
  /** The number of servers to create. */
  count?: number;
  /** The datacenter location. */
  datacenter?: "US" | "ES" | "DE" | "GB";
  /** The description of the server. */
  description?: string;
  /** The firewall policy name or ID. */
  firewall_policy?: string;
  /** The instance size name or ID of the server. It is required only for 'present' state, and it is mutually exclusive with vcore, cores_per_processor, ram, and hdds parameters. */
  fixed_instance_size?: string;
  /** A list of hard disks with nested O(ignore:hdds[].size) and O(ignore:hdds[].is_main) properties. It must be provided with O(vcore), O(cores_per_processor), and O(ram) parameters. */
  hdds?: Record<string, unknown> | Record<string, unknown>[];
  /** The hostname or ID of the server. Only used when state is 'present'. */
  hostname?: string;
  /** The load balancer name or ID. */
  load_balancer?: string;
  /** The monitoring policy name or ID. */
  monitoring_policy?: string;
  /** The private network name or ID. */
  private_network?: string;
  /** The amount of RAM memory. It must be provided with with O(vcore), O(cores_per_processor), and O(hdds) parameters. */
  ram?: number;
  /** Server identifier (ID or hostname). It is required for all states except 'running' and 'present'. */
  server?: string;
  /** The type of server to be built. */
  server_type?: "cloud" | "baremetal" | "k8s_node";
  /** User's public SSH key (contents, not path). */
  ssh_key?: unknown;
  /** Define a server's state to create, remove, start or stop it. */
  state?: "present" | "absent" | "running" | "stopped";
  /** The total number of processors. It must be provided with O(cores_per_processor), O(ram), and O(hdds) parameters. */
  vcore?: number;
  /** Wait for the server to be in state 'running' before returning. Also used for delete operation (set to V(false) if you do not want to wait for each individual server to be deleted before moving on with other tasks). */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandoneServerReturn {
  /** Information about each server that was processed. */
  servers?: string | string[];
}

export const oneandone_server = defineModule<OneandoneServerArgs, OneandoneServerReturn>("community.general.oneandone_server");
