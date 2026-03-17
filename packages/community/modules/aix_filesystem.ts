// Auto-generated from: community.general.aix_filesystem
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AixFilesystemArgs {
  /** Specifies whether the file system is to be processed by the accounting subsystem. */
  account_subsystem?: boolean;
  /** Specifies attributes for files system separated by comma. */
  attributes?: string | string[];
  /** File system is automatically mounted at system restart. */
  auto_mount?: boolean;
  /** Logical volume (LV) device name or remote export device to create a NFS file system. */
  device?: string;
  /** Specifies the mount point, which is the directory where the file system will be mounted. */
  filesystem: string;
  /** Specifies the virtual file system type. */
  fs_type?: string;
  /** Specifies the mount group. */
  mount_group?: string;
  /** Specifies a Network File System (NFS) server. */
  nfs_server?: string;
  /** Set file system permissions. V(rw) (read-write) or V(ro) (read-only). */
  permissions?: "ro" | "rw";
  /** Removes the mount point directory when used with state V(absent). */
  rm_mount_point?: boolean;
  /** Specifies the file system size. */
  size?: string;
  /** Controls the file system state. */
  state?: "absent" | "mounted" | "present" | "unmounted";
  /** Specifies an existing volume group (VG). */
  vg?: string;
}

export type AixFilesystemReturn = Record<string, unknown>;

export const aix_filesystem = defineModule<AixFilesystemArgs, AixFilesystemReturn>("community.general.aix_filesystem");
