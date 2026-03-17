// Auto-generated from: community.general.wdc_redfish_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface WdcRedfishInfoArgs {
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
  /** Timeout in seconds for URL requests to OOB controller. */
  timeout?: number;
  /** User for authentication with OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface WdcRedfishInfoReturn {
  /** Firmware update status description. */
  Description?: string;
  /** Numeric error code for firmware update status. Non-zero indicates an error condition. */
  ErrorCode?: number;
  /** Estimated number of minutes remaining in firmware update operation. */
  EstimatedRemainingMinutes?: number;
  /** Firmware update status code. */
  StatusCode?: number;
}

export const wdc_redfish_info = defineModule<WdcRedfishInfoArgs, WdcRedfishInfoReturn>("community.general.wdc_redfish_info");
