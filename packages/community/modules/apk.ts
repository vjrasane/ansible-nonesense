// Auto-generated from: community.general.apk
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ApkArgs {
  /** During upgrade, reset versioned world dependencies and change logic to prefer replacing or downgrading packages (instead of holding them) if the currently installed package is no longer available from any repository. */
  available?: boolean;
  /** A package name, like V(foo), or multiple packages, like V(foo,bar). */
  name?: string | string[];
  /** Do not use any local cache path. */
  no_cache?: boolean;
  /** A package repository or multiple repositories. Unlike with the underlying apk command, this list overrides the system repositories rather than supplement them. */
  repository?: string | string[];
  /** Indicates the desired package(s) state. */
  state?: "present" | "absent" | "latest" | "installed" | "removed";
  /** Update repository indexes. Can be run with other steps or on its own. */
  update_cache?: boolean;
  /** Upgrade all installed packages to their latest version. */
  upgrade?: boolean;
  /** Use a custom world file when checking for explicitly installed packages. The file is used only when a value is provided for O(name), and O(state) is set to V(present) or V(latest). */
  world?: string;
}

export interface ApkReturn {
  /** A list of packages that have been changed. */
  packages?: string | string[];
}

export const apk = defineModule<ApkArgs, ApkReturn>("community.general.apk");
