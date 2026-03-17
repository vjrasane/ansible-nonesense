// Auto-generated from: community.general.lxd_profile
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LxdProfileArgs {
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** The config for the instance (for example V({"limits.memory": "4GB"})). */
  config?: Record<string, unknown>;
  /** Description of the profile. */
  description?: string;
  /** The devices for the profile (for example V({"rootfs": {"path": "/dev/kvm", "type": "unix-char"})). */
  devices?: Record<string, unknown>;
  /** Merge the configuration of the present profile with the new desired configuration, instead of replacing it. */
  merge_profile?: boolean;
  /** Name of a profile. */
  name: string;
  /** A new name of a profile. */
  new_name?: string;
  /** Project of a profile. See U(https://documentation.ubuntu.com/lxd/en/latest/projects/). */
  project?: string;
  /** The unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** Define the state of a profile. */
  state?: "present" | "absent";
  /** The client trusted password. */
  trust_password?: string;
  /** The unix domain socket path or the https URL for the LXD server. */
  url?: string;
}

export interface LxdProfileReturn {
  /** List of actions performed for the profile. */
  actions?: string | string[];
  /** The logs of requests and responses. */
  logs?: string | string[];
  /** The old state of the profile. */
  old_state?: string;
}

export const lxd_profile = defineModule<LxdProfileArgs, LxdProfileReturn>("community.general.lxd_profile");
