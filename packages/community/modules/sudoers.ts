// Auto-generated from: community.general.sudoers
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SudoersArgs {
  /** The commands allowed by the sudoers rule. */
  commands?: string | string[];
  /** The name of the group for the sudoers rule. */
  group?: string;
  /** Specify the host the rule is for. */
  host?: string;
  /** The name of the sudoers rule. */
  name: string;
  /** Whether a command is prevented to run further commands itself. */
  noexec?: boolean;
  /** Whether a password is not required when command is run with sudo. */
  nopassword?: boolean;
  /** Specify the target user the command(s) runs as. */
  runas?: string;
  /** Whether to allow keeping the environment when command is run with sudo. */
  setenv?: boolean;
  /** Whether the rule should exist or not. */
  state?: "present" | "absent";
  /** The path which sudoers config files are managed in. */
  sudoers_path?: string;
  /** The name of the user for the sudoers rule. */
  user?: string;
  /** If V(absent), the sudoers rule is added without validation. */
  validation?: "absent" | "detect" | "required";
}

export type SudoersReturn = Record<string, unknown>;

export const sudoers = defineModule<SudoersArgs, SudoersReturn>("community.general.sudoers");
