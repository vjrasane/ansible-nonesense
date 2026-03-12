// Auto-generated from: community.general.decompress
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DecompressArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** The file name of the destination file where the compressed file is decompressed. */
  dest?: string;
  /** The type of compression to use to decompress. */
  format?: "gz" | "bz2" | "xz";
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Remove original compressed file after decompression. */
  remove?: boolean;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Remote absolute path for the file to decompress. */
  src: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export interface DecompressReturn {
  /** Path to decompressed file. */
  dest?: string;
}

export const decompress = defineModule<DecompressArgs, DecompressReturn>("community.general.decompress");
