// Auto-generated from: community.general.ocapi_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OcapiInfoArgs {
  /** Base URI of OOB controller. */
  baseuri: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** Command to execute on OOB controller. */
  command: string;
  /** Name of job for fetching status. */
  job_name?: string;
  /** Password for authenticating to OOB controller. */
  password: string;
  /** For proxied inband requests, the slot number of the IOM. Only applies if O(baseuri) is a proxy server. */
  proxy_slot_number?: number;
  /** Timeout in seconds for URL requests to OOB controller. */
  timeout?: number;
  /** Username for authenticating to OOB controller. */
  username: string;
}

export interface OcapiInfoReturn {
  /** Details of the relevant operation. Applies to O(command=JobStatus). */
  details?: string | string[];
  /** Message with action result or error description. */
  msg?: string;
  /** Health of the operation. Applies to O(command=JobStatus). See OCAPI documentation for details. */
  operationHealth?: string;
  /** Integer value for health of the operation (corresponds to RV(operationHealth)). Applies to O(command=JobStatus). See OCAPI documentation for details. */
  operationHealthId?: string;
  /** Status of the relevant operation. Applies to O(command=JobStatus). See OCAPI documentation for details. */
  operationStatus?: string;
  /** Integer value of status (corresponds to operationStatus). Applies to O(command=JobStatus). See OCAPI documentation for details. */
  operationStatusId?: number;
  /** Percent complete of the relevant operation. Applies to O(command=JobStatus). */
  percentComplete?: number;
  /** Dictionary containing status information. See OCAPI documentation for details. */
  status?: Record<string, unknown>;
}

export const ocapi_info = defineModule<OcapiInfoArgs, OcapiInfoReturn>("community.general.ocapi_info");
