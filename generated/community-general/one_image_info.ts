// Auto-generated from: community.general.one_image_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneImageInfoArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** A list of images IDs whose facts you want to gather. */
  ids?: string | string[];
  /** A O(name) of the image whose facts is gathered. */
  name?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Time to wait for the desired state to be reached before timeout, in seconds. */
  wait_timeout?: number;
}

export interface OneImageInfoReturn {
  /** A list of images info. */
  images?: unknown;
}

export const one_image_info = defineModule<OneImageInfoArgs, OneImageInfoReturn>("community.general.one_image_info");
