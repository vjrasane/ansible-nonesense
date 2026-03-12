// Auto-generated from: community.general.git_config_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitConfigInfoArgs {
  /** The name of the setting to read. */
  name?: string;
  /** Path to a git repository or file for reading values from a specific repo. */
  path?: string;
  /** Specify which scope to read values from. */
  scope?: "global" | "system" | "local" | "file";
}

export interface GitConfigInfoReturn {
  /** When O(name) is set, a string containing the value of the setting in name. If O(name) is not set, empty. If a config key such as V(push.pushoption) has more then one entry, just the first one is returned here. */
  config_value?: string;
  /** This is a dictionary mapping a git configuration setting to a list of its values. */
  config_values?: Record<string, unknown>;
}

export const git_config_info = defineModule<GitConfigInfoArgs, GitConfigInfoReturn>("community.general.git_config_info");
