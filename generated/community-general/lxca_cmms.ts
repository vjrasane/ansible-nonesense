// Auto-generated from: community.general.lxca_cmms
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LxcaCmmsArgs {
  /** Lxca HTTPS full web address. */
  auth_url: string;
  /** UUID of chassis, this is string with length greater than 16. */
  chassis?: string;
  /** Options to filter nodes information. */
  command_options?: "cmms" | "cmms_by_uuid" | "cmms_by_chassis_uuid";
  /** The password for use in HTTP basic authentication. */
  login_password: string;
  /** The username for use in HTTP basic authentication. */
  login_user: string;
  /** UUID of device, this is string with length greater than 16. */
  uuid?: string;
}

export interface LxcaCmmsReturn {
  /** Cmms detail from lxca. */
  result?: Record<string, unknown>;
}

export const lxca_cmms = defineModule<LxcaCmmsArgs, LxcaCmmsReturn>("community.general.lxca_cmms");
