// Auto-generated from: community.general.linode_v4
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LinodeV4Args {
  /** The Linode API v4 access token. It may also be specified by exposing the E(LINODE_ACCESS_TOKEN) environment variable. */
  access_token: string;
  /** A list of SSH public key parts to deploy for the root user. */
  authorized_keys?: string | string[];
  /** The group that the instance should be marked under. Please note, that group labelling is deprecated but still supported. The encouraged method for marking instances is to use tags. */
  group?: string;
  /** The image of the instance. This is a required parameter only when creating Linode instances. */
  image?: string;
  /** The instance label. This label is used as the main determiner for idempotency for the module and is therefore mandatory. */
  label: string;
  /** If V(true), the created Linode instance has private networking enabled and assigned a private IPv4 address. */
  private_ip?: boolean;
  /** The region of the instance. This is a required parameter only when creating Linode instances. See U(https://www.linode.com/docs/api/regions/). */
  region?: string;
  /** The password for the root user. If not specified, it generates a new one. This generated password is available in the task success JSON. */
  root_pass?: string;
  /** An object containing arguments to any User Defined Fields present in the StackScript used when creating the instance. Only valid when a O(stackscript_id) is provided. */
  stackscript_data?: Record<string, unknown>;
  /** The numeric ID of the StackScript to use when creating the instance. */
  stackscript_id?: number;
  /** The desired instance state. */
  state: "present" | "absent";
  /** The tags that the instance should be marked under. */
  tags?: string | string[];
  /** The type of the instance. This is a required parameter only when creating Linode instances. */
  type?: string;
}

export interface LinodeV4Return {
  /** The instance description in JSON serialized form. */
  instance?: Record<string, unknown>;
}

export const linode_v4 = defineModule<LinodeV4Args, LinodeV4Return>("community.general.linode_v4");
