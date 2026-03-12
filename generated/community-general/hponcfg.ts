// Auto-generated from: community.general.hponcfg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HponcfgArgs {
  /** Path to the hponcfg executable (C(hponcfg) which uses E(PATH)). */
  executable?: string;
  /** The minimum firmware level needed. */
  minfw?: string;
  /** The XML file as accepted by C(hponcfg). */
  path: string;
  /** Run C(hponcfg) in verbose mode (-v). */
  verbose?: boolean;
}

export type HponcfgReturn = Record<string, unknown>;

export const hponcfg = defineModule<HponcfgArgs, HponcfgReturn>("community.general.hponcfg");
