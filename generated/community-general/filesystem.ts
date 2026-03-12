// Auto-generated from: community.general.filesystem
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface FilesystemArgs {
  /** Target path to block device (Linux) or character device (FreeBSD) or regular file (both). */
  dev: string;
  /** If V(true), allows to create new filesystem on devices that already has filesystem. */
  force?: boolean;
  /** Filesystem type to be created. This option is required with O(state=present) (or if O(state) is omitted). */
  fstype?: "bcachefs" | "btrfs" | "ext2" | "ext3" | "ext4" | "ext4dev" | "f2fs" | "lvm" | "ocfs2" | "reiserfs" | "xfs" | "vfat" | "swap" | "ufs";
  /** List of options to be passed to C(mkfs) command. */
  opts?: string;
  /** If V(true), if the block device and filesystem size differ, grow the filesystem into the space. */
  resizefs?: boolean;
  /** If O(state=present), the filesystem is created if it does not already exist, that is the default behaviour if O(state) is omitted. */
  state?: "present" | "absent";
  /** Set filesystem's UUID to the given value. */
  uuid?: string;
}

export type FilesystemReturn = Record<string, unknown>;

export const filesystem = defineModule<FilesystemArgs, FilesystemReturn>("community.general.filesystem");
