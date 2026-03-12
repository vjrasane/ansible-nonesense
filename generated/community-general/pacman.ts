// Auto-generated from: community.general.pacman
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PacmanArgs {
  /** Path of the binary to use. This can either be C(pacman) or a pacman compatible AUR helper. */
  executable?: string;
  /** Additional option to pass to pacman when enforcing O(state). */
  extra_args?: string;
  /** When removing packages, forcefully remove them, without any checks. Same as O(extra_args="--nodeps --nodeps"). */
  force?: boolean;
  /** Name or list of names of the package(s) or file(s) to install, upgrade, or remove. Cannot be used in combination with O(upgrade). */
  name?: string | string[];
  /** The install reason to set for the packages. */
  reason?: "dependency" | "explicit";
  /** Set the install reason for V(all) packages or only for V(new) packages. */
  reason_for?: "all" | "new";
  /** When removing packages, do not save modified configuration files as C(.pacsave) files. (passes C(--nosave) to pacman). */
  remove_nosave?: boolean;
  /** Whether to install (V(present) or V(installed), V(latest)), or remove (V(absent) or V(removed)) a package. */
  state?: "absent" | "installed" | "latest" | "present" | "removed";
  /** Whether or not to refresh the master package lists. */
  update_cache?: boolean;
  /** Additional option to pass to pacman when enforcing O(update_cache). */
  update_cache_extra_args?: string;
  /** Whether or not to upgrade the whole system. Cannot be used in combination with O(name). */
  upgrade?: boolean;
  /** Additional option to pass to pacman when enforcing O(upgrade). */
  upgrade_extra_args?: string;
}

export interface PacmanReturn {
  /** The changed status of C(pacman -Sy). */
  cache_updated?: boolean;
  /** A list of packages that have been changed. */
  packages?: string | string[];
}

export const pacman = defineModule<PacmanArgs, PacmanReturn>("community.general.pacman");
