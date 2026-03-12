// Auto-generated from: community.general.git_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitConfigArgs {
  /** Specify if a value should replace the existing value(s) or if the new value should be added alongside other values with the same name. */
  add_mode?: "add" | "replace-all";
  /** Path to an adhoc git configuration file to be managed using the V(file) scope. */
  file?: string;
  /** The name of the setting. */
  name: string;
  /** Path to a git repository for reading and writing values from a specific repo. */
  repo?: string;
  /** Specify which scope to read/set values from. */
  scope?: "file" | "local" | "global" | "system";
  /** Indicates the setting should be set/unset. This parameter has higher precedence than O(value) parameter: when O(state=absent) and O(value) is defined, O(value) is discarded. */
  state?: "present" | "absent";
  /** When specifying the name of a single setting, supply a value to set that setting to the given value. */
  value?: string;
}

export type GitConfigReturn = Record<string, unknown>;

export const git_config = defineModule<GitConfigArgs, GitConfigReturn>("community.general.git_config");
