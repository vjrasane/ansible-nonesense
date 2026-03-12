// Auto-generated from: community.general.redfish_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RedfishInfoArgs {
  /** Security token for authenticating to OOB controller. */
  auth_token?: string;
  /** Base URI of OOB controller. */
  baseuri: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** List of categories to execute on OOB controller. */
  category?: string | string[];
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
  command?: string | string[];
  /** Name of manager on OOB controller to target. */
  manager?: string;
  /** Password for authenticating to OOB controller. */
  password?: string;
  /** Timeout in seconds for HTTP requests to OOB controller. */
  timeout?: number;
  /** Handle to check the status of an update in progress. */
  update_handle?: string;
  /** Username for authenticating to OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface RedfishInfoReturn {
  /** Different results depending on task. */
  result?: Record<string, unknown>;
}

export const redfish_info = defineModule<RedfishInfoArgs, RedfishInfoReturn>("community.general.redfish_info");
