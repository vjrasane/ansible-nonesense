// Auto-generated from: community.general.idrac_redfish_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IdracRedfishConfigArgs {
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
  /** Dictionary of iDRAC attribute name and value pairs to update. */
  manager_attributes?: Record<string, unknown>;
  /** Password for authenticating to iDRAC. */
  password?: string;
  /** ID of the System, Manager or Chassis to modify. */
  resource_id?: string;
  /** Timeout in seconds for HTTP requests to iDRAC. */
  timeout?: number;
  /** Username for authenticating to iDRAC. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface IdracRedfishConfigReturn {
  /** Message with action result or error description. */
  msg?: string;
}

export const idrac_redfish_config = defineModule<IdracRedfishConfigArgs, IdracRedfishConfigReturn>("community.general.idrac_redfish_config");
