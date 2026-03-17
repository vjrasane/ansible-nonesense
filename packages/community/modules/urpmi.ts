// Auto-generated from: community.general.urpmi
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UrpmiArgs {
  /** Assume "yes" is the answer to any question urpmi has to ask. Corresponds to the C(--force) option for C(urpmi). */
  force?: boolean;
  /** A list of package names to install, upgrade or remove. */
  name: string | string[];
  /** Corresponds to the C(--no-recommends) option for C(urpmi). */
  no_recommends?: boolean;
  /** Specifies an alternative install root, relative to which all packages are installed. Corresponds to the C(--root) option for C(urpmi). */
  root?: string;
  /** Indicates the desired package state. */
  state?: "absent" | "present" | "installed" | "removed";
  /** Update the package database first C(urpmi.update -a). */
  update_cache?: boolean;
}

export type UrpmiReturn = Record<string, unknown>;

export const urpmi = defineModule<UrpmiArgs, UrpmiReturn>("community.general.urpmi");
