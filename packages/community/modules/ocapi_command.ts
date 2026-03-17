// Auto-generated from: community.general.ocapi_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OcapiCommandArgs {
  /** Base URI of OOB controller. */
  baseuri: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** Command to execute on OOB controller. */
  command: string;
  /** For O(command=DeleteJob) command, the name of the job to delete. */
  job_name?: string;
  /** Password for authenticating to OOB controller. */
  password: string;
  /** For proxied inband requests, the slot number of the IOM. Only applies if O(baseuri) is a proxy server. */
  proxy_slot_number?: number;
  /** Timeout in seconds for URL requests to OOB controller. */
  timeout?: number;
  /** For O(command=FWUpload), the path on the local filesystem of the firmware update image. */
  update_image_path?: string;
  /** Username for authenticating to OOB controller. */
  username: string;
}

export interface OcapiCommandReturn {
  /** URI to use to monitor status of the operation. Returned for async commands such as Firmware Update, Firmware Activate. */
  jobUri?: string;
  /** Message with action result or error description. */
  msg?: string;
  /** OCAPI State ID (see OCAPI documentation for possible values). */
  operationStatusId?: number;
}

export const ocapi_command = defineModule<OcapiCommandArgs, OcapiCommandReturn>("community.general.ocapi_command");
