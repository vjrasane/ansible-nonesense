// Auto-generated from: community.general.one_image
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneImageArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** Whether the image should be created if not present. */
  create?: boolean;
  /** Use with O(create=true) to specify datastore for image. */
  datastore_id?: number;
  /** Whether the image should be enabled or disabled. */
  enabled?: boolean;
  /** A O(id) of the image you would like to manage. */
  id?: number;
  /** A O(name) of the image you would like to manage. */
  name?: string;
  /** A name that is assigned to the existing or new image. */
  new_name?: string;
  /** Whether the image should be persistent or non-persistent. */
  persistent?: boolean;
  /** V(present) - state that is used to manage the image. */
  state?: "present" | "absent" | "cloned" | "renamed";
  /** Use with O(create=true) to specify image template. */
  template?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Seconds to wait until image is ready, deleted or cloned. */
  wait_timeout?: number;
}

export interface OneImageReturn {
  /** The image's list of app_clones ID's. */
  app_clones?: number | number[];
  /** The image's list of clones ID's. */
  clones?: number | number[];
  /** The image's cloning ID. */
  cloning_id?: number;
  /** The image's cloning operations per second. */
  cloning_ops?: number;
  /** The image's datastore name. */
  datastore?: number;
  /** The image's datastore ID. */
  datastore_id?: number;
  /** The image's format type. */
  disk_type?: string;
  /** The image's filesystem type. */
  fstype?: string;
  /** Image's group ID. */
  group_id?: number;
  /** Image's group name. */
  group_name?: string;
  /** Image ID. */
  id?: number;
  /** Image name. */
  name?: string;
  /** Image's owner ID. */
  owner_id?: number;
  /** Image's owner name. */
  owner_name?: string;
  /** The image's filesystem path. */
  path?: string;
  /** The image's permissions. */
  permissions?: Record<string, unknown>;
  /** The image's persistence status (1 means true, 0 means false). */
  persistent?: number;
  /** Count of running vms that use this image. */
  running_vms?: number;
  /** The image's size in MegaBytes. */
  size?: number;
  /** The image's list of snapshots. */
  snapshots?: string | string[];
  /** The image's source. */
  source?: string;
  /** State of image instance. */
  state?: string;
  /** The image's target snapshot. */
  target_snapshot?: number;
  /** The image's type. */
  type?: string;
  /** Is image in use. */
  used?: boolean;
  /** The image's list of VM ID's. */
  vms?: number | number[];
}

export const one_image = defineModule<OneImageArgs, OneImageReturn>("community.general.one_image");
