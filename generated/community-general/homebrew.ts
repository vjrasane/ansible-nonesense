// Auto-generated from: community.general.homebrew
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HomebrewArgs {
  /** Force the package(s) to be treated as a formula (equivalent to C(brew --formula)). */
  force_formula?: boolean;
  /** Options flags to install a package. */
  install_options?: string | string[];
  /** A list of names of packages to install/remove. */
  name?: string | string[];
  /** A V(:) separated list of paths to search for C(brew) executable. Since a package (I(formula) in homebrew parlance) location is prefixed relative to the actual path of C(brew) command, providing an alternative C(brew) path enables managing different set of packages in an alternative location in the system. */
  path?: string;
  /** State of the package. */
  state?: "absent" | "head" | "installed" | "latest" | "linked" | "present" | "removed" | "uninstalled" | "unlinked" | "upgraded";
  /** Update homebrew itself first. */
  update_homebrew?: boolean;
  /** Upgrade all homebrew packages. */
  upgrade_all?: boolean;
  /** Option flags to upgrade. */
  upgrade_options?: string | string[];
}

export interface HomebrewReturn {
  /** List of package names which are changed after module run. */
  changed_pkgs?: string | string[];
  /** If the cache was updated or not. */
  msg?: string;
  /** List of package names which are unchanged after module run. */
  unchanged_pkgs?: string | string[];
}

export const homebrew = defineModule<HomebrewArgs, HomebrewReturn>("community.general.homebrew");
