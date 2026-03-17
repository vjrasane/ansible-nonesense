// Auto-generated from: community.general.xbps
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XbpsArgs {
  /** Whether or not repository signing keys should be automatically accepted. */
  accept_pubkey?: boolean;
  /** Name of the package to install, upgrade, or remove. */
  name?: string | string[];
  /** When removing a package, also remove its dependencies, provided that they are not required by other packages and were not explicitly installed by a user. */
  recurse?: boolean;
  /** Repository URL(s) to prepend to the repository list for the package installation. The URL can be remote repositories or paths for local repositories. */
  repositories?: string | string[];
  /** The full path for the target root directory. */
  root?: string;
  /** Desired state of the package. */
  state?: "present" | "absent" | "latest" | "installed" | "removed";
  /** Whether or not to refresh the master package lists. This can be run as part of a package installation or as a separate step. */
  update_cache?: boolean;
  /** Whether or not to upgrade whole system. */
  upgrade?: boolean;
  /** Whether or not to upgrade the C(xbps) package when necessary. Before installing new packages, C(xbps) requires the user to update itself. Thus when this option is set to V(false), upgrades and installations fail when C(xbps) is not up to date. */
  upgrade_xbps?: boolean;
}

export interface XbpsReturn {
  /** Message about results. */
  msg?: string;
  /** Packages that are affected/would be affected. */
  packages?: string | string[];
}

export const xbps = defineModule<XbpsArgs, XbpsReturn>("community.general.xbps");
