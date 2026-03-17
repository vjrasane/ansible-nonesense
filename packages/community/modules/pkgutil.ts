// Auto-generated from: community.general.pkgutil
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PkgutilArgs {
  /** To allow the update process to downgrade packages to match what is present in the repository, set this to V(true). */
  force?: boolean;
  /** The name of the package. */
  name: string | string[];
  /** The repository path to install the package from. */
  site?: string;
  /** Whether to install (V(present)/V(installed)), or remove (V(absent)/V(removed)) packages. */
  state: "absent" | "installed" | "latest" | "present" | "removed";
  /** If you always want to refresh your catalog from the mirror, even when it is not stale, set this to V(true). */
  update_catalog?: boolean;
}

export type PkgutilReturn = Record<string, unknown>;

export const pkgutil = defineModule<PkgutilArgs, PkgutilReturn>("community.general.pkgutil");
