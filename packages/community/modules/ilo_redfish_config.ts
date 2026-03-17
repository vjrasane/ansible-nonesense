// Auto-generated from: community.general.ilo_redfish_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IloRedfishConfigArgs {
  /** Name of the attribute to be configured. */
  attribute_name: string;
  /** Value of the attribute to be configured. */
  attribute_value?: string;
  /** Security token for authenticating to iLO. */
  auth_token?: string;
  /** Base URI of iLO. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Command category to execute on iLO. */
  category: "Manager";
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on iLO. */
  command: string | string[];
  /** Password for authenticating to iLO. */
  password?: string;
  /** Timeout in seconds for HTTP requests to iLO. */
  timeout?: number;
  /** Username for authenticating to iLO. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface IloRedfishConfigReturn {
  /** Message with action result or error description. */
  msg?: string;
}

export const ilo_redfish_config = defineModule<IloRedfishConfigArgs, IloRedfishConfigReturn>("community.general.ilo_redfish_config");
