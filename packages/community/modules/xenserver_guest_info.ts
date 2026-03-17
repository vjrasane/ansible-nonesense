// Auto-generated from: community.general.xenserver_guest_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XenserverGuestInfoArgs {
  /** The hostname or IP address of the XenServer host or XenServer pool master. */
  hostname?: string;
  /** Name of the VM to gather facts from. */
  name?: string;
  /** The password to use for connecting to XenServer. */
  password?: string;
  /** The username to use for connecting to XenServer. */
  username?: string;
  /** UUID of the VM to gather fact of. This is XenServer's unique identifier. */
  uuid?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
}

export interface XenserverGuestInfoReturn {
  /** Metadata about the VM. */
  instance?: Record<string, unknown>;
}

export const xenserver_guest_info = defineModule<XenserverGuestInfoArgs, XenserverGuestInfoReturn>("community.general.xenserver_guest_info");
