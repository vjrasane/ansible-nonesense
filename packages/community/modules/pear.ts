// Auto-generated from: community.general.pear
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PearArgs {
  /** Path to the pear executable. */
  executable?: string;
  /** Name of the package to install, upgrade, or remove. */
  name: string;
  /** List of regular expressions that can be used to detect prompts during pear package installation to answer the expected question. */
  prompts?: unknown | unknown[];
  /** Desired state of the package. */
  state?: "present" | "installed" | "latest" | "absent" | "removed";
}

export type PearReturn = Record<string, unknown>;

export const pear = defineModule<PearArgs, PearReturn>("community.general.pear");
