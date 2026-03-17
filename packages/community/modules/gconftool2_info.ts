// Auto-generated from: community.general.gconftool2_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Gconftool2InfoArgs {
  /** The key name for an element in the GConf database. */
  key: string;
}

export interface Gconftool2InfoReturn {
  /** The value of the property. */
  value?: string;
  /** Version of gconftool-2. */
  version?: string;
}

export const gconftool2_info = defineModule<Gconftool2InfoArgs, Gconftool2InfoReturn>("community.general.gconftool2_info");
