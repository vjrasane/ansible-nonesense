// Auto-generated from: community.general.iso_create
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IsoCreateArgs {
  /** The absolute path with file name of the new generated ISO file on local machine. */
  dest_iso: string;
  /** The ISO9660 interchange level to use, it dictates the rules on the names of files. */
  interchange_level?: number;
  /** Support levels and valid values are V(1), V(2), or V(3). */
  joliet?: number;
  /** Whether to make this ISO have the Rock Ridge extensions or not. */
  rock_ridge?: "1.09" | "1.10" | "1.12";
  /** This is a list of absolute paths of source files or folders to be contained in the new generated ISO file. */
  src_files: string | string[];
  /** Whether to add UDF support to this ISO. */
  udf?: boolean;
  /** The volume identification string to use on the new generated ISO image. */
  vol_ident?: string;
}

export interface IsoCreateReturn {
  /** Created iso file path. */
  created_iso?: string;
  /** Configured interchange level. */
  interchange_level?: number;
  /** Configured Joliet support level. */
  joliet?: number;
  /** Configured Rock Ridge version. */
  rock_ridge?: string;
  /** Configured source files or directories list. */
  source_file?: string | string[];
  /** Configured UDF support. */
  udf?: boolean;
  /** Configured volume identification string. */
  vol_ident?: string;
}

export const iso_create = defineModule<IsoCreateArgs, IsoCreateReturn>("community.general.iso_create");
