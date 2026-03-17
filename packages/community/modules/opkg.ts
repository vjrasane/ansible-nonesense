// Auto-generated from: community.general.opkg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OpkgArgs {
  /** The executable location for C(opkg). */
  executable?: string;
  /** The C(opkg --force) parameter used. */
  force?: "depends" | "maintainer" | "reinstall" | "overwrite" | "downgrade" | "space" | "postinstall" | "remove" | "checksum" | "removal-of-dependent-packages";
  /** Name of package(s) to install/remove. */
  name: string | string[];
  /** State of the package. */
  state?: "present" | "absent" | "installed" | "removed";
  /** Update the package DB first. */
  update_cache?: boolean;
}

export interface OpkgReturn {
  /** Version of opkg. */
  version?: string;
}

export const opkg = defineModule<OpkgArgs, OpkgReturn>("community.general.opkg");
