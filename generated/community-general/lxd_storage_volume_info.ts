// Auto-generated from: community.general.lxd_storage_volume_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LxdStorageVolumeInfoArgs {
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** Name of a specific storage volume to retrieve information about. */
  name?: string;
  /** Name of the storage pool to query for volumes. */
  pool: string;
  /** Project of the storage volume. See U(https://documentation.ubuntu.com/lxd/en/latest/projects/). */
  project?: string;
  /** The Unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** The client trusted password. */
  trust_password?: string;
  /** Filter volumes by type. */
  type?: string;
  /** The Unix domain socket path or the https URL for the LXD server. */
  url?: string;
}

export interface LxdStorageVolumeInfoReturn {
  /** The logs of requests and responses. */
  logs?: Record<string, unknown> | Record<string, unknown>[];
  /** List of LXD storage volumes. */
  storage_volumes?: Record<string, unknown> | Record<string, unknown>[];
}

export const lxd_storage_volume_info = defineModule<LxdStorageVolumeInfoArgs, LxdStorageVolumeInfoReturn>("community.general.lxd_storage_volume_info");
