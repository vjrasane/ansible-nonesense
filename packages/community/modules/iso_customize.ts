// Auto-generated from: community.general.iso_customize
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IsoCustomizeArgs {
  /** Allows to add and replace files in the ISO file. */
  add_files?: Record<string, unknown> | Record<string, unknown>[];
  /** Absolute paths for files inside the ISO file that should be removed. */
  delete_files?: string | string[];
  /** The path of the customized ISO file. */
  dest_iso: string;
  /** This is the path of source ISO file. */
  src_iso: string;
}

export interface IsoCustomizeReturn {
  /** Path of the customized ISO file. */
  dest_iso?: string;
  /** Path of source ISO file. */
  src_iso?: string;
}

export const iso_customize = defineModule<IsoCustomizeArgs, IsoCustomizeReturn>("community.general.iso_customize");
