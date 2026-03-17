// Auto-generated from: community.general.lbu
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LbuArgs {
  /** Control whether to commit changed files. */
  commit?: boolean;
  /** List of paths to exclude. */
  exclude?: string | string[];
  /** List of paths to include. */
  include?: string | string[];
}

export interface LbuReturn {
  /** Error message. */
  msg?: string;
}

export const lbu = defineModule<LbuArgs, LbuReturn>("community.general.lbu");
