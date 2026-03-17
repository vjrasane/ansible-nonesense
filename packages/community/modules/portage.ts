// Auto-generated from: community.general.portage
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PortageArgs {
  /** Set backtrack value (C(--backtrack)). */
  backtrack?: number;
  /** Tells emerge to replace installed packages for which the ebuild dependencies have changed since the packages were built (C(--changed-deps)). */
  changed_deps?: boolean;
  /** Include installed packages where USE flags have changed, except when. */
  changed_use?: boolean;
  /** Consider the entire dependency tree of packages (C(--deep)). */
  deep?: boolean;
  /** Remove packages not needed by explicitly merged packages (C(--depclean)). */
  depclean?: boolean;
  /** Prefer packages specified at C(PORTAGE_BINHOST) in C(make.conf). */
  getbinpkg?: boolean;
  /** Merge only packages specified at C(PORTAGE_BINHOST) in C(make.conf). */
  getbinpkgonly?: boolean;
  /** Specifies the number of packages to build simultaneously. */
  jobs?: number;
  /** Continue as much as possible after an error. */
  keepgoing?: boolean;
  /** Specifies that no new builds should be started if there are other builds running and the load average is at least LOAD. */
  loadavg?: number;
  /** Include installed packages where USE flags have changed (C(--newuse)). */
  newuse?: boolean;
  /** Only merge packages but not their dependencies (C(--nodeps)). */
  nodeps?: boolean;
  /** Do not re-emerge installed packages (C(--noreplace)). */
  noreplace?: boolean;
  /** Do not add the packages to the world file (C(--oneshot)). */
  oneshot?: boolean;
  /** Only merge packages' dependencies but not the packages (C(--onlydeps)). */
  onlydeps?: boolean;
  /** Package atom or set, for example V(sys-apps/foo) or V(>foo-2.13) or V(@world). */
  package?: string | string[];
  /** Run emerge in quiet mode (C(--quiet)). */
  quiet?: boolean;
  /** Redirect all build output to logs alone, and do not display it on stdout (C(--quiet-build)). */
  quietbuild?: boolean;
  /** Suppresses display of the build log on stdout (--quiet-fail). */
  quietfail?: boolean;
  /** If set to V(true), explicitely add the package to the world file. */
  select?: boolean;
  /** State of the package atom. */
  state?: "present" | "installed" | "emerged" | "absent" | "removed" | "unmerged" | "latest";
  /** Sync package repositories first. */
  sync?: "web" | "yes" | "no";
  /** Update packages to the best version available (C(--update)). */
  update?: boolean;
  /** Tries to use the binary package(s) in the locally available packages directory. */
  usepkg?: boolean;
  /** Merge only binaries (no compiling). */
  usepkgonly?: boolean;
  /** Run emerge in verbose mode (C(--verbose)). */
  verbose?: boolean;
  /** Specifies that build time dependencies should be installed. */
  withbdeps?: boolean;
}

export type PortageReturn = Record<string, unknown>;

export const portage = defineModule<PortageArgs, PortageReturn>("community.general.portage");
