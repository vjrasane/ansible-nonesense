// Auto-generated from: community.general.zypper_repository
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZypperRepositoryArgs {
  /** Automatically import the gpg signing key of the new or changed repository. */
  auto_import_keys?: boolean;
  /** Enable autorefresh of the repository. */
  autorefresh?: boolean;
  /** A description of the repository. */
  description?: string;
  /** Whether to disable GPG signature checking of all packages. Has an effect only if O(state=present). */
  disable_gpg_check?: boolean;
  /** Set repository to enabled (or disabled). */
  enabled?: boolean;
  /** A name for the repository. Not required when adding repofiles. */
  name?: string;
  /** Overwrite multiple repository entries, if repositories with both name and URL already exist. */
  overwrite_multiple?: boolean;
  /** Set priority of repository. Packages are always installed from the repository with the smallest priority number. */
  priority?: number;
  /** URI of the repository or full path of a C(.repo) file. Required when O(state=present). */
  repo?: string;
  /** Refresh the package list of the given repository. */
  runrefresh?: boolean;
  /** Whether the repository should exist or not. */
  state?: "absent" | "present";
}

export type ZypperRepositoryReturn = Record<string, unknown>;

export const zypper_repository = defineModule<ZypperRepositoryArgs, ZypperRepositoryReturn>("community.general.zypper_repository");
