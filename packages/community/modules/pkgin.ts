// Auto-generated from: community.general.pkgin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PkginArgs {
  /** Clean packages cache. */
  clean?: boolean;
  /** Force package reinstall. */
  force?: boolean;
  /** Upgrade all packages to their newer versions. */
  full_upgrade?: boolean;
  /** Name of package to install/remove; */
  name?: string | string[];
  /** Intended state of the package. */
  state?: "present" | "absent";
  /** Update repository database. Can be run with other steps or on its own. */
  update_cache?: boolean;
  /** Upgrade main packages to their newer versions. */
  upgrade?: boolean;
}

export type PkginReturn = Record<string, unknown>;

export const pkgin = defineModule<PkginArgs, PkginReturn>("community.general.pkgin");
