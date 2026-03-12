// Auto-generated from: community.general.yum_versionlock
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface YumVersionlockArgs {
  /** Package name or a list of package names with optional version or wildcards. */
  name: string | string[];
  /** If state is V(present), package(s) is/are added to yum versionlock list. */
  state?: "absent" | "present";
}

export interface YumVersionlockReturn {
  /** A list of package(s) in versionlock list. */
  packages?: string | string[];
  /** State of package(s). */
  state?: string;
}

export const yum_versionlock = defineModule<YumVersionlockArgs, YumVersionlockReturn>("community.general.yum_versionlock");
