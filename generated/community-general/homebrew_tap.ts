// Auto-generated from: community.general.homebrew_tap
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HomebrewTapArgs {
  /** The GitHub user/organization repository to tap. */
  name: string | string[];
  /** A V(:) separated list of paths to search for C(brew) executable. */
  path?: string;
  /** State of the repository. */
  state?: "present" | "absent";
  /** The optional git URL of the repository to tap. The URL is not assumed to be on GitHub, and the protocol does not have to be HTTP. Any location and protocol that git can handle is fine. */
  url?: string;
}

export type HomebrewTapReturn = Record<string, unknown>;

export const homebrew_tap = defineModule<HomebrewTapArgs, HomebrewTapReturn>("community.general.homebrew_tap");
