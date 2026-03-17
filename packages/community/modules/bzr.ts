// Auto-generated from: community.general.bzr
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BzrArgs {
  /** Absolute path of where the branch should be cloned to. */
  dest: string;
  /** Path to C(bzr) executable to use. If not supplied, the normal mechanism for resolving binary paths is used. */
  executable?: string;
  /** If V(true), any modified files in the working tree is discarded. */
  force?: boolean;
  /** SSH or HTTP protocol address of the parent branch. */
  name: string;
  /** What version of the branch to clone. This can be the bzr revno or revid. */
  version?: string;
}

export type BzrReturn = Record<string, unknown>;

export const bzr = defineModule<BzrArgs, BzrReturn>("community.general.bzr");
