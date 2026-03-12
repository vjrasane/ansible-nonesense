// Auto-generated from: community.general.mksysb
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MksysbArgs {
  /** Backup encrypted files. */
  backup_crypt_files?: boolean;
  /** Back up DMAPI filesystem files. */
  backup_dmapi_fs?: boolean;
  /** Creates a new MAP files. */
  create_map_files?: boolean;
  /** Excludes files using C(/etc/rootvg.exclude). */
  exclude_files?: boolean;
  /** Excludes WPAR files. */
  exclude_wpar_files?: boolean;
  /** Backup extended attributes. */
  extended_attrs?: boolean;
  /** Backup name. */
  name: string;
  /** Creates a new file data. */
  new_image_data?: boolean;
  /** Exclude files from packing option listed in C(/etc/exclude_packing.rootvg). */
  software_packing?: boolean;
  /** Storage path where the mksysb backup is stored. */
  storage_path: string;
  /** Creates backup using snapshots. */
  use_snapshot?: boolean;
}

export interface MksysbReturn {
  /** Return message regarding the action. */
  msg?: string;
}

export const mksysb = defineModule<MksysbArgs, MksysbReturn>("community.general.mksysb");
