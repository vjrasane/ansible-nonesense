// Auto-generated from: community.general.bower
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface BowerArgs {
  /** The name of a bower package to install. */
  name?: string;
  /** Install packages from local cache, if the packages were installed before. */
  offline?: boolean;
  /** The base path where to install the bower packages. */
  path: string;
  /** Install with C(--production) flag. */
  production?: boolean;
  /** Relative path to bower executable from install path. */
  relative_execpath?: string;
  /** The state of the bower package. */
  state?: "present" | "absent" | "latest";
  /** The version to be installed. */
  version?: string;
}

export type BowerReturn = Record<string, unknown>;

export const bower = defineModule<BowerArgs, BowerReturn>("community.general.bower");
