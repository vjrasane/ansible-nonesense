// Auto-generated from: community.general.slackpkg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SlackpkgArgs {
  /** Name of package to install/remove. */
  name: string | string[];
  /** State of the package, you can use V(installed) as an alias for V(present) and V(removed) as one for V(absent). */
  state?: "present" | "absent" | "latest" | "installed" | "removed";
  /** Update the package database first. */
  update_cache?: boolean;
}

export type SlackpkgReturn = Record<string, unknown>;

export const slackpkg = defineModule<SlackpkgArgs, SlackpkgReturn>("community.general.slackpkg");
