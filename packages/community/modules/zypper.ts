// Auto-generated from: community.general.zypper
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ZypperArgs {
  /** Adds C(--allow_vendor_change) option to I(zypper) dist-upgrade command. */
  allow_vendor_change?: boolean;
  /** Whether to automatically import new repository signing keys. Adds C(--gpg-auto-import-keys) option to I(zypper). */
  auto_import_keys?: boolean;
  /** Adds C(--clean-deps) option to I(zypper) remove command. */
  clean_deps?: boolean;
  /** Whether to disable to GPG signature checking of the package signature being installed. Has an effect only if O(state) is V(present) or V(latest). */
  disable_gpg_check?: boolean;
  /** Corresponds to the C(--no-recommends) option for I(zypper). Default behavior (V(true)) modifies zypper's default behavior; V(false) does install recommended packages. */
  disable_recommends?: boolean;
  /** Add additional options to C(zypper) command. */
  extra_args?: string;
  /** Add additional global target options to C(zypper). */
  extra_args_precommand?: string;
  /** Adds C(--force) option to I(zypper). Allows to downgrade packages and change vendor or architecture. */
  force?: boolean;
  /** Adds C(--force-resolution) option to I(zypper). Allows to (un)install packages with conflicting requirements (resolver chooses a solution). */
  force_resolution?: boolean;
  /** Package name V(name) or package specifier or a list of either. */
  name: string | string[];
  /** Adds C(--oldpackage) option to I(zypper). Allows to downgrade packages with less side-effects than force. This is implied as soon as a version is specified as part of the package name. */
  oldpackage?: boolean;
  /** Adds C(--quiet) option to I(zypper) install/update command. */
  quiet?: boolean;
  /** Adds C(--replacefiles) option to I(zypper) install/update command. */
  replacefiles?: boolean;
  /** When set to V(true), provide a simplified error output (parses only the C(<message>) tag text in the XML output). */
  simple_errors?: boolean;
  /** When set to V(true), ignore I(zypper) return code 107 (post install script errors). */
  skip_post_errors?: boolean;
  /** V(present) makes sure the package is installed. */
  state?: "present" | "latest" | "absent" | "dist-upgrade" | "installed" | "removed";
  /** The type of package to be operated on. */
  type?: "package" | "patch" | "pattern" | "product" | "srcpackage" | "application";
  /** Run the equivalent of C(zypper refresh) before the operation. Disabled in check mode. */
  update_cache?: boolean;
}

export type ZypperReturn = Record<string, unknown>;

export const zypper = defineModule<ZypperArgs, ZypperReturn>("community.general.zypper");
