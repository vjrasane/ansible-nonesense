// Auto-generated from: community.general.interfaces_file
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface InterfacesFileArgs {
  /** Address family of the interface, useful if same interface name is used for both V(inet) and V(inet6). */
  address_family?: string;
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** Path to the interfaces file. */
  dest?: string;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Name of the interface, required for value changes or option remove. */
  iface?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the option, required for value changes or option remove. */
  option?: string;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** If set to V(absent) the option or section is removed if present instead of created. */
  state?: "present" | "absent";
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** If O(option) is not presented for the O(iface) and O(state) is V(present), then O(option) is added. If O(option) already exists and is not V(pre-up), V(up), V(post-up) or V(down), its value is updated. V(pre-up), V(up), V(post-up) and V(down) options cannot be updated, only adding new options, removing existing ones or cleaning the whole option set are supported. */
  value?: string;
}

export interface InterfacesFileReturn {
  /** Destination file/path. */
  dest?: string;
  /** Interfaces dictionary. */
  ifaces?: Record<string, unknown>;
}

export const interfaces_file = defineModule<InterfacesFileArgs, InterfacesFileReturn>("community.general.interfaces_file");
