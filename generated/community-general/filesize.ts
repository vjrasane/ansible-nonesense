// Auto-generated from: community.general.filesize
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface FilesizeArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Size of blocks, in bytes if not followed by a multiplicative suffix. */
  blocksize?: unknown;
  /** Whether or not to overwrite the file if it exists, in other words, to truncate it from 0. When V(true), the module is not idempotent, that means it always reports RV(ignore:changed=true). */
  force?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Path of the regular file to create or resize. */
  path: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Requested size of the file. */
  size: unknown;
  /** Device or file that provides input data to provision the file. */
  source?: string;
  /** Whether or not the file to create should be a sparse file. */
  sparse?: boolean;
  /** This option is silently ignored. This module always modifies file size in-place. */
  unsafe_writes?: boolean;
}

export interface FilesizeReturn {
  /** Command executed to create or resize the file. */
  cmd?: string;
  /** Dictionary of sizes related to the file. */
  filesize?: Record<string, unknown>;
  /** Realpath of the file if it is a symlink, otherwise the same than module's param. */
  path?: string;
  /** Difference (positive or negative) between old size and new size, in bytes. */
  size_diff?: number;
}

export const filesize = defineModule<FilesizeArgs, FilesizeReturn>("community.general.filesize");
