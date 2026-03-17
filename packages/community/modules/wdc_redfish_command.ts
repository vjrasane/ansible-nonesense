// Auto-generated from: community.general.wdc_redfish_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface WdcRedfishCommandArgs {
  /** Security token for authentication with OOB controller. */
  auth_token?: string;
  /** Base URI of OOB controller. Must include this or O(ioms). */
  baseuri?: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
  command: string | string[];
  /** List of IOM FQDNs for the enclosure. Must include this or O(baseuri). */
  ioms?: string | string[];
  /** Password for authentication with OOB controller. */
  password?: string;
  /** ID of the component to modify, such as V(Enclosure), V(IOModuleAFRU), V(PowerSupplyBFRU), V(FanExternalFRU3), or V(FanInternalFRU). */
  resource_id?: string;
  /** Timeout in seconds for URL requests to OOB controller. */
  timeout?: number;
  /** The credentials for retrieving the update image. */
  update_creds?: {
    password?: string;
    username?: string;
  };
  /** The URI of the image for the update. */
  update_image_uri?: string;
  /** User for authentication with OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface WdcRedfishCommandReturn {
  /** Message with action result or error description. */
  msg?: string;
}

export const wdc_redfish_command = defineModule<WdcRedfishCommandArgs, WdcRedfishCommandReturn>("community.general.wdc_redfish_command");
