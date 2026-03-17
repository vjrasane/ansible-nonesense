// Auto-generated from: community.general.dconf
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DconfArgs {
  /** A dconf key to modify or read from the dconf database. */
  key: string;
  /** The action to take upon the key/value. */
  state?: "read" | "present" | "absent";
  /** Value to set for the specified dconf key. Value should be specified in GVariant format. Due to complexity of this format, it is best to have a look at existing values in the dconf database. */
  value?: unknown;
}

export interface DconfReturn {
  /** Value associated with the requested key. */
  value?: string;
}

export const dconf = defineModule<DconfArgs, DconfReturn>("community.general.dconf");
