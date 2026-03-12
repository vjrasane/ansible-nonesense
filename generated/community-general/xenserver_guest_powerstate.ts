// Auto-generated from: community.general.xenserver_guest_powerstate
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface XenserverGuestPowerstateArgs {
  /** The hostname or IP address of the XenServer host or XenServer pool master. */
  hostname?: string;
  /** Name of the VM to manage. */
  name?: string;
  /** The password to use for connecting to XenServer. */
  password?: string;
  /** Specify the state VM should be in. */
  state?: "powered-on" | "powered-off" | "restarted" | "shutdown-guest" | "reboot-guest" | "suspended" | "present";
  /** By default, module waits indefinitely for VM to change state or acquire an IP address if O(wait_for_ip_address=true). */
  state_change_timeout?: number;
  /** The username to use for connecting to XenServer. */
  username?: string;
  /** UUID of the VM to manage if known. This is XenServer's unique identifier. */
  uuid?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
  /** Wait until XenServer detects an IP address for the VM. */
  wait_for_ip_address?: boolean;
}

export interface XenserverGuestPowerstateReturn {
  /** Metadata about the VM. */
  instance?: Record<string, unknown>;
}

export const xenserver_guest_powerstate = defineModule<XenserverGuestPowerstateArgs, XenserverGuestPowerstateReturn>("community.general.xenserver_guest_powerstate");
