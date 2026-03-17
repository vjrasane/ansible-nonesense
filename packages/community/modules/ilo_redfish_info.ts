// Auto-generated from: community.general.ilo_redfish_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IloRedfishInfoArgs {
  /** Security token for authenticating to iLO. */
  auth_token?: string;
  /** Base URI of iLO. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** List of categories to execute on iLO. */
  category: string | string[];
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

export interface IloRedfishInfoReturn {
  /** Returns iLO sessions. */
  ilo_redfish_info?: Record<string, unknown>;
}

export const ilo_redfish_info = defineModule<IloRedfishInfoArgs, IloRedfishInfoReturn>("community.general.ilo_redfish_info");
