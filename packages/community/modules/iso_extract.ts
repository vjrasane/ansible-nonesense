// Auto-generated from: community.general.iso_extract
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IsoExtractArgs {
  /** The destination directory to extract files to. */
  dest: string;
  /** The path to the C(7z) executable to use for extracting files from the ISO. */
  executable?: string;
  /** A list of files to extract from the image. */
  files: string | string[];
  /** If V(true), it replaces the remote file when contents are different than the source. */
  force?: boolean;
  /** The ISO image to extract files from. */
  image: string;
  /** Password used to decrypt files from the ISO. */
  password?: string;
}

export type IsoExtractReturn = Record<string, unknown>;

export const iso_extract = defineModule<IsoExtractArgs, IsoExtractReturn>("community.general.iso_extract");
