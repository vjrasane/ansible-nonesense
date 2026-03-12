// Auto-generated from: community.general.lxc_container
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LxcContainerArgs {
  /** When set to V(true) the system attempts to create a compressed tarball of the running container. The O(archive) option supports LVM backed containers and creates a snapshot of the running container when creating the archive. */
  archive?: boolean;
  /** Type of compression to use when creating an archive of a running container. */
  archive_compression?: "gzip" | "bzip2" | "none";
  /** Path the save the archived container. */
  archive_path?: string;
  /** Backend storage type for the container. */
  backing_store?: "dir" | "lvm" | "loop" | "btrfs" | "overlayfs" | "zfs";
  /** Name of the new cloned server. */
  clone_name?: string;
  /** Create a snapshot a container when cloning. */
  clone_snapshot?: boolean;
  /** Path to the LXC configuration file. */
  config?: string;
  /** Run a command within a container. */
  container_command?: string;
  /** A list of C(key=value) options to use when configuring a container. */
  container_config?: string | string[];
  /** Enable a container log for host actions to the container. */
  container_log?: boolean;
  /** Set the log level for a container where O(container_log) was set. */
  container_log_level?: "Info" | "info" | "INFO" | "Error" | "error" | "ERROR" | "Debug" | "debug" | "DEBUG";
  /** Place rootfs directory under DIR. */
  directory?: string;
  /** File system Size. */
  fs_size?: string;
  /** Create fstype TYPE. */
  fs_type?: string;
  /** Name of the logical volume, defaults to the container name. */
  lv_name?: string;
  /** Place container under E(PATH). */
  lxc_path?: string;
  /** Name of a container. */
  name: string;
  /** Define the state of a container. */
  state?: "started" | "stopped" | "restarted" | "absent" | "frozen" | "clone";
  /** Name of the template to use within an LXC create. */
  template?: string;
  /** Template options when building the container. */
  template_options?: string;
  /** Use LVM thin pool called TP. */
  thinpool?: string;
  /** If backend store is lvm, specify the name of the volume group. */
  vg_name?: string;
  /** Create zfs under given zfsroot. */
  zfs_root?: string;
}

export interface LxcContainerReturn {
  /** Container information. */
  lxc_container?: unknown;
}

export const lxc_container = defineModule<LxcContainerArgs, LxcContainerReturn>("community.general.lxc_container");
