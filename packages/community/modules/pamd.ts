// Auto-generated from: community.general.pamd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PamdArgs {
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** The control of the PAM rule being modified. */
  control: string;
  /** When O(state=updated), the O(module_arguments) replace existing module_arguments. */
  module_arguments?: string | string[];
  /** The module path of the PAM rule being modified. */
  module_path: string;
  /** The name generally refers to the PAM service file to change, for example system-auth. */
  name: string;
  /** The new control to assign to the new rule. */
  new_control?: string;
  /** The new module path to be assigned to the new rule. */
  new_module_path?: string;
  /** The new type to assign to the new rule. */
  new_type?: "account" | "-account" | "auth" | "-auth" | "password" | "-password" | "session" | "-session";
  /** This is the path to the PAM service files. */
  path?: string;
  /** The default of V(updated) modifies an existing rule if type, control and module_path all match an existing rule. */
  state?: "absent" | "before" | "after" | "args_absent" | "args_present" | "updated";
  /** The type of the PAM rule being modified. */
  type: "account" | "-account" | "auth" | "-auth" | "password" | "-password" | "session" | "-session";
}

export interface PamdReturn {
  /** The file name of the backup file, if created. */
  backupdest?: string;
  /** How many rules were changed. */
  change_count?: number;
}

export const pamd = defineModule<PamdArgs, PamdReturn>("community.general.pamd");
