// Auto-generated from: community.general.ini_file
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IniFileArgs {
  /** Allow option without value and without '=' symbol. */
  allow_no_value?: boolean;
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** If set to V(false), the module fails if the file does not already exist. */
  create?: boolean;
  /** If set to V(true) (default), all matching O(option) lines are removed when O(state=absent), or replaced when O(state=present). */
  exclusive?: boolean;
  /** This flag indicates that filesystem links, if they exist, should be followed. */
  follow?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Do not change a line if doing so would only add or remove spaces before or after the V(=) symbol. */
  ignore_spaces?: boolean;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** By default the module replaces a commented line that matches the given option. */
  modify_inactive_option?: boolean;
  /** Do not insert spaces before and after '=' symbol. */
  no_extra_spaces?: boolean;
  /** If set (required for changing a O(value)), this is the name of the option. */
  option?: string;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Path to the INI-style file; this file is created if required. */
  path: string;
  /** Section name in INI file. This is added if O(state=present) automatically when a single value is being set. */
  section?: string;
  /** Among possibly multiple sections of the same name, select the first one that contains matching options and values. */
  section_has_values?: Record<string, unknown> | Record<string, unknown>[];
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** If set to V(absent) and O(exclusive) set to V(true) all matching O(option) lines are removed. */
  state?: "absent" | "present";
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** The string value to be associated with an O(option). */
  value?: string;
  /** The string value to be associated with an O(option). */
  values?: string | string[];
}

export type IniFileReturn = Record<string, unknown>;

export const ini_file = defineModule<IniFileArgs, IniFileReturn>("community.general.ini_file");
