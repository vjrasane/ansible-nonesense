// Auto-generated from: community.general.homebrew_cask
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HomebrewCaskArgs {
  /** Allow external apps. */
  accept_external_apps?: boolean;
  /** Upgrade casks that auto update. */
  greedy?: boolean;
  /** Options flags to install a package. */
  install_options?: string | string[];
  /** Name of cask to install or remove. */
  name?: string | string[];
  /** ':' separated list of paths to search for 'brew' executable. */
  path?: string;
  /** State of the cask. */
  state?: "absent" | "installed" | "latest" | "present" | "removed" | "uninstalled" | "upgraded";
  /** The sudo password to be passed to E(SUDO_ASKPASS). */
  sudo_password?: string;
  /** Update homebrew itself first. */
  update_homebrew?: boolean;
  /** Upgrade all casks. */
  upgrade_all?: boolean;
}

export type HomebrewCaskReturn = Record<string, unknown>;

export const homebrew_cask = defineModule<HomebrewCaskArgs, HomebrewCaskReturn>("community.general.homebrew_cask");
