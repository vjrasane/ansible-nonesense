// Auto-generated from: community.general.oneandone_public_ip
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneandonePublicIpArgs {
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** Authenticating API token provided by 1&1. */
  auth_token?: string;
  /** ID of the datacenter where the IP is created (only for unassigned IPs). */
  datacenter?: "US" | "ES" | "DE" | "GB";
  /** The ID of the public IP used with update and delete states. */
  public_ip_id?: string;
  /** Reverse DNS name. maxLength=256. */
  reverse_dns?: string;
  /** Define a public IP state to create, remove, or update. */
  state?: "present" | "absent" | "update";
  /** Type of IP. Currently, only IPV4 is available. */
  type?: "IPV4" | "IPV6";
  /** Wait for the instance to be in state 'running' before returning. */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the _wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandonePublicIpReturn {
  /** Information about the public IP that was processed. */
  public_ip?: Record<string, unknown>;
}

export const oneandone_public_ip = defineModule<OneandonePublicIpArgs, OneandonePublicIpReturn>("community.general.oneandone_public_ip");
