// Auto-generated from: community.general.xcc_redfish_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface XccRedfishCommandArgs {
  /** Security token for authentication with OOB controller. */
  auth_token?: string;
  /** Base URI of OOB controller. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
  command: string | string[];
  /** Password for authentication with OOB controller. */
  password?: string;
  /** The request body to patch or post. */
  request_body?: Record<string, unknown>;
  /** The ID of the System, Manager or Chassis to modify. */
  resource_id?: string;
  /** The resource URI to get or patch or post. */
  resource_uri?: string;
  /** Timeout in seconds for URL requests to OOB controller. */
  timeout?: number;
  /** Username for authentication with OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
  /** The options for VirtualMedia commands. */
  virtual_media?: {
    image_url?: string;
    inserted?: boolean;
    media_types?: string | string[];
    password?: string;
    transfer_method?: string;
    transfer_protocol_type?: string;
    username?: string;
    write_protected?: boolean;
  };
}

export interface XccRedfishCommandReturn {
  /** A message related to the performed action(s). */
  msg?: string;
  /** Resource content. */
  redfish_facts?: Record<string, unknown>;
}

export const xcc_redfish_command = defineModule<XccRedfishCommandArgs, XccRedfishCommandReturn>("community.general.xcc_redfish_command");
