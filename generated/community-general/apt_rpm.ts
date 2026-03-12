// Auto-generated from: community.general.apt_rpm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AptRpmArgs {
  /** Run the equivalent of C(apt-get clean) to clear out the local repository of retrieved package files. It removes everything but the lock file from C(/var/cache/apt/archives/) and C(/var/cache/apt/archives/partial/). */
  clean?: boolean;
  /** If true performs an C(apt-get dist-upgrade) to upgrade system. */
  dist_upgrade?: boolean;
  /** List of packages to install, upgrade, or remove. */
  package?: string | string[];
  /** Indicates the desired package state. */
  state?: "absent" | "present" | "present_not_latest" | "installed" | "removed" | "latest";
  /** Run the equivalent of C(apt-get update) before the operation. Can be run as part of the package installation or as a separate step. */
  update_cache?: boolean;
  /** If true performs an C(update-kernel) to upgrade kernel packages. */
  update_kernel?: boolean;
}

export type AptRpmReturn = Record<string, unknown>;

export const apt_rpm = defineModule<AptRpmArgs, AptRpmReturn>("community.general.apt_rpm");
