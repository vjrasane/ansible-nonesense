// Auto-generated from: community.general.idrac_redfish_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IdracRedfishInfoArgs {
  /** Security token for authenticating to iDRAC. */
  auth_token?: string;
  /** Base URI of iDRAC. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on iDRAC. */
  category: string;
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on iDRAC. */
  command: string | string[];
  /** Password for authenticating to iDRAC. */
  password?: string;
  /** Timeout in seconds for HTTP requests to iDRAC. */
  timeout?: number;
  /** Username for authenticating to iDRAC. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface IdracRedfishInfoReturn {
  /** Different results depending on task. */
  msg?: Record<string, unknown>;
}

export const idrac_redfish_info = defineModule<IdracRedfishInfoArgs, IdracRedfishInfoReturn>("community.general.idrac_redfish_info");
