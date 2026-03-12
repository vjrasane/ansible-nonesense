// Auto-generated from: community.general.apt_repo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AptRepoArgs {
  /** Remove other then added repositories. */
  remove_others?: boolean;
  /** Name of the repository to add or remove. */
  repo: string;
  /** Indicates the desired repository state. */
  state?: "absent" | "present";
  /** Update the package database after changing repositories. */
  update?: boolean;
}

export type AptRepoReturn = Record<string, unknown>;

export const apt_repo = defineModule<AptRepoArgs, AptRepoReturn>("community.general.apt_repo");
