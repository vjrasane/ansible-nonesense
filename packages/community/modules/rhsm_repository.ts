// Auto-generated from: community.general.rhsm_repository
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RhsmRepositoryArgs {
  /** The ID of repositories to enable. */
  name: string | string[];
  /** Disable all currently enabled repositories that are not not specified in O(name). Only set this to V(true) if passing in a list of repositories to the O(name) field. Using this with C(loop) is likely not to have the desired result. */
  purge?: boolean;
  /** If state is equal to present or disabled, indicates the desired repository state. */
  state?: "enabled" | "disabled";
}

export interface RhsmRepositoryReturn {
  /** The list of RHSM repositories with their states. */
  repositories?: string | string[];
}

export const rhsm_repository = defineModule<RhsmRepositoryArgs, RhsmRepositoryReturn>("community.general.rhsm_repository");
