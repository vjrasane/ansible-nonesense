// Auto-generated from: community.general.swdepot
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SwdepotArgs {
  /** The source repository from which install or upgrade a package. */
  depot?: string;
  /** Package name. */
  name: string;
  /** Whether to install (V(present), V(latest)), or remove (V(absent)) a package. */
  state: "present" | "latest" | "absent";
}

export type SwdepotReturn = Record<string, unknown>;

export const swdepot = defineModule<SwdepotArgs, SwdepotReturn>("community.general.swdepot");
