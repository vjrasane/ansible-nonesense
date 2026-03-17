// Auto-generated from: community.general.copr
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CoprArgs {
  /** The name of the chroot that you want to enable/disable/remove in the project, for example V(epel-7-x86_64). Default chroot is determined by the operating system, version of the operating system, and architecture on which the module is run. */
  chroot?: string;
  /** List of packages to exclude. */
  excludepkgs?: string | string[];
  /** The Copr host to work with. */
  host?: string;
  /** List of packages to include. */
  includepkgs?: string | string[];
  /** Copr directory name, for example C(@copr/copr-dev). */
  name: string;
  /** This indicate which protocol to use with the host. */
  protocol?: string;
  /** Whether to set this project as V(enabled), V(disabled), or V(absent). */
  state?: "absent" | "enabled" | "disabled";
}

export interface CoprReturn {
  /** Path to the project on the host. */
  repo?: string;
  /** The name of the repo file in which the copr project information is stored. */
  repo_filename?: string;
}

export const copr = defineModule<CoprArgs, CoprReturn>("community.general.copr");
