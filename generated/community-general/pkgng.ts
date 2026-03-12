// Auto-generated from: community.general.pkgng
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PkgngArgs {
  /** A list of keyvalue-pairs of the form C(<+/-/:><key>[=<value>]). A V(+) denotes adding an annotation, a V(-) denotes removing an annotation, and V(:) denotes modifying an annotation. If setting or modifying annotations, a value must be provided. */
  annotation?: string | string[];
  /** Remove automatically installed packages which are no longer needed. */
  autoremove?: boolean;
  /** Use local package base instead of fetching an updated one. */
  cached?: boolean;
  /** Pkg chroots in the specified environment. */
  chroot?: string;
  /** Ignore FreeBSD OS version check, useful on C(-STABLE) and C(-CURRENT) branches. */
  ignore_osver?: boolean;
  /** Pkg executes in the given jail name or ID. */
  jail?: string;
  /** Name or list of names of packages to install/remove. */
  name: string | string[];
  /** For C(pkgng) versions before 1.1.4, specify C(packagesite) to use for downloading packages. If not specified, use settings from C(/usr/local/etc/pkg.conf). */
  pkgsite?: string;
  /** For C(pkgng) versions 1.5 and later, pkg installs all packages within the specified root directory. */
  rootdir?: string;
  /** State of the package. */
  state?: "present" | "latest" | "absent";
  /** Treat the package names as shell glob patterns. */
  use_globs?: boolean;
}

export type PkgngReturn = Record<string, unknown>;

export const pkgng = defineModule<PkgngArgs, PkgngReturn>("community.general.pkgng");
