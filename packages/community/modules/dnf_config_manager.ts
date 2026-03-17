// Auto-generated from: community.general.dnf_config_manager
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DnfConfigManagerArgs {
  /** Repository ID, for example V(crb). */
  name?: string | string[];
  /** Whether the repositories should be V(enabled) or V(disabled). */
  state?: "enabled" | "disabled";
}

export interface DnfConfigManagerReturn {
  /** Repositories changed. */
  changed_repos?: string | string[];
  /** Repository states after action taken. */
  repo_states_post?: Record<string, unknown>;
  /** Repo IDs before action taken. */
  repo_states_pre?: Record<string, unknown>;
}

export const dnf_config_manager = defineModule<DnfConfigManagerArgs, DnfConfigManagerReturn>("community.general.dnf_config_manager");
