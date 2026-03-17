// Auto-generated from: community.general.archive
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ArchiveArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** The file name of the destination archive. The parent directory must exists on the remote host. */
  dest?: string;
  /** Remote absolute path, glob, or list of paths or globs for the file or files to exclude from O(path) list and glob expansion. */
  exclude_path?: string | string[];
  /** Glob style patterns to exclude files or directories from the resulting archive. */
  exclusion_patterns?: string | string[];
  /** Allows you to force the module to treat this as an archive even if only a single file is specified. */
  force_archive?: boolean;
  /** The type of compression to use. */
  format?: "bz2" | "gz" | "tar" | "xz" | "zip";
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Remote absolute path, glob, or list of paths or globs for the file or files to compress or archive. */
  path: string | string[];
  /** Remove any added source files and trees after adding to archive. */
  remove?: boolean;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export interface ArchiveReturn {
  /** Any files that were compressed or added to the archive. */
  archived?: string | string[];
  /** The archive root. */
  arcroot?: string;
  /** The state of the O(dest) file. */
  dest_state?: string;
  /** The list of matching exclude paths from the exclude_path argument. */
  expanded_exclude_paths?: string | string[];
  /** The list of matching paths from paths argument. */
  expanded_paths?: string | string[];
  /** Any files that were missing from the source. */
  missing?: string | string[];
  /** The state of the input O(path). */
  state?: string;
}

export const archive = defineModule<ArchiveArgs, ArchiveReturn>("community.general.archive");
