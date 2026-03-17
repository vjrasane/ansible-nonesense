// Auto-generated from: community.general.ilo_redfish_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IloRedfishCommandArgs {
  /** Security token for authenticating to iLO. */
  auth_token?: string;
  /** Base URI of OOB controller. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on OOB controller. */
  category: "Systems";
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
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

export interface IloRedfishCommandReturn {
  /** Returns the status of the operation performed on the iLO. */
  ilo_redfish_command?: Record<string, unknown>;
}

export const ilo_redfish_command = defineModule<IloRedfishCommandArgs, IloRedfishCommandReturn>("community.general.ilo_redfish_command");
