// Auto-generated from: community.general.lvg_rename
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LvgRenameArgs {
  /** The name or UUID of the source VG. */
  vg: string;
  /** The new name of the VG. */
  vg_new: string;
}

export type LvgRenameReturn = Record<string, unknown>;

export const lvg_rename = defineModule<LvgRenameArgs, LvgRenameReturn>("community.general.lvg_rename");
