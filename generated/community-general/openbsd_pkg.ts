// Auto-generated from: community.general.openbsd_pkg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OpenbsdPkgArgs {
  /** Calls C(pkg_delete -a) to remove automatically installed packages which are no longer needed. */
  autoremove?: boolean;
  /** Build the package from source instead of downloading and installing a binary. Requires that the port source tree is already installed. Automatically builds and installs the C(sqlports) package, if it is not already installed. */
  build?: boolean;
  /** When updating or removing packages, delete the extra configuration file(s) in the old packages which are annotated with C(@extra) in the packaging-list. */
  clean?: boolean;
  /** A name or a list of names of the packages. */
  name: string | string[];
  /** When used in combination with the O(build) option, allows overriding the default ports source directory. */
  ports_dir?: string;
  /** Replace or delete packages quickly; do not bother with checksums before removing normal files. */
  quick?: boolean;
  /** Force C(%c) and C(%m) to expand to C(snapshots), even on a release kernel. */
  snapshot?: boolean;
  /** V(present) ensures the package is installed. */
  state?: "absent" | "latest" | "present" | "installed" | "removed";
}

export type OpenbsdPkgReturn = Record<string, unknown>;

export const openbsd_pkg = defineModule<OpenbsdPkgArgs, OpenbsdPkgReturn>("community.general.openbsd_pkg");
