// Auto-generated from: community.general.hg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HgArgs {
  /** If V(false), do not clone the repository if it does not exist locally. */
  clone?: boolean;
  /** Absolute path of where the repository should be cloned to. This parameter is required, unless clone and update are set to no. */
  dest?: string;
  /** Path to C(hg) executable to use. If not supplied, the normal mechanism for resolving binary paths is used. */
  executable?: string;
  /** Discards uncommitted changes. Runs C(hg update -C). */
  force?: boolean;
  /** Deletes untracked files. Runs C(hg purge). */
  purge?: boolean;
  /** The repository address. */
  repo: string;
  /** Equivalent C(-r) option in hg command which could be the changeset, revision number, branch name or even tag. */
  revision?: string;
  /** If V(false), do not retrieve new revisions from the origin repository. */
  update?: boolean;
}

export type HgReturn = Record<string, unknown>;

export const hg = defineModule<HgArgs, HgReturn>("community.general.hg");
