// Auto-generated from: community.general.lxd_storage_pool_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LxdStoragePoolInfoArgs {
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** Name of a specific storage pool to retrieve information about. */
  name?: string;
  /** Project of the storage pool. See U(https://documentation.ubuntu.com/lxd/en/latest/projects/). */
  project?: string;
  /** The Unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** The client trusted password. */
  trust_password?: string;
  /** Filter storage pools by driver/type (for example V(dir), V(zfs), V(btrfs), V(lvm), or V(ceph)). */
  type?: string | string[];
  /** The Unix domain socket path or the https URL for the LXD server. */
  url?: string;
}

export interface LxdStoragePoolInfoReturn {
  /** The logs of requests and responses. */
  logs?: Record<string, unknown> | Record<string, unknown>[];
  /** List of LXD storage pools. */
  storage_pools?: Record<string, unknown> | Record<string, unknown>[];
}

export const lxd_storage_pool_info = defineModule<LxdStoragePoolInfoArgs, LxdStoragePoolInfoReturn>("community.general.lxd_storage_pool_info");
