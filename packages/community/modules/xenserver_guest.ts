// Auto-generated from: community.general.xenserver_guest
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XenserverGuestArgs {
  /** A CD-ROM configuration for the VM. */
  cdrom?: {
    iso_name?: string;
    type?: "none" | "iso";
  };
  /** Define a list of custom VM params to set on VM. */
  custom_params?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of disks to add to VM. */
  disks?: Record<string, unknown> | Record<string, unknown>[];
  /** Destination folder for VM. */
  folder?: string;
  /** Ignore warnings and complete the actions. */
  force?: boolean;
  /** Manage VM's hardware parameters. VM needs to be shut down to reconfigure these parameters. */
  hardware?: {
    memory_mb?: number;
    num_cpu_cores_per_socket?: number;
    num_cpus?: number;
  };
  /** Name of a XenServer host that is a Home Server for the VM. */
  home_server?: string;
  /** The hostname or IP address of the XenServer host or XenServer pool master. */
  hostname?: string;
  /** Convert VM to template. */
  is_template?: boolean;
  /** Whether to create a Linked Clone from the template, existing VM or snapshot. If V(false), it creates a full copy. */
  linked_clone?: boolean;
  /** Name of the VM to work with. */
  name?: string;
  /** VM description. */
  name_desc?: string;
  /** A list of networks (in the order of the NICs). */
  networks?: Record<string, unknown> | Record<string, unknown>[];
  /** The password to use for connecting to XenServer. */
  password?: string;
  /** Specify the state VM should be in. */
  state?: "present" | "absent" | "poweredon";
  /** By default, the module waits indefinitely for VM to acquire an IP address if O(wait_for_ip_address=true). */
  state_change_timeout?: number;
  /** Name of a template, an existing VM (must be shut down) or a snapshot that should be used to create VM. */
  template?: string;
  /** UUID of a template, an existing VM or a snapshot that should be used to create VM. */
  template_uuid?: string;
  /** The username to use for connecting to XenServer. */
  username?: string;
  /** UUID of the VM to manage if known. This is XenServer's unique identifier. */
  uuid?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
  /** Wait until XenServer detects an IP address for the VM. If O(state) is set to V(absent), this parameter is ignored. */
  wait_for_ip_address?: boolean;
}

export interface XenserverGuestReturn {
  /** Detected or made changes to VM. */
  changes?: string | string[];
  /** Metadata about the VM. */
  instance?: Record<string, unknown>;
}

export const xenserver_guest = defineModule<XenserverGuestArgs, XenserverGuestReturn>("community.general.xenserver_guest");
