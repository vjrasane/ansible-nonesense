// Auto-generated from: community.general.rhsm_release
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RhsmReleaseArgs {
  /** RHSM release version to use. */
  release?: string;
}

export interface RhsmReleaseReturn {
  /** The current RHSM release version value. */
  current_release?: string;
}

export const rhsm_release = defineModule<RhsmReleaseArgs, RhsmReleaseReturn>("community.general.rhsm_release");
