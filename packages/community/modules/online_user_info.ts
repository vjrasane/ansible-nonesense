// Auto-generated from: community.general.online_user_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OnlineUserInfoArgs {
  /** HTTP timeout to Online API in seconds. */
  api_timeout?: number;
  /** Online OAuth token. */
  api_token: string;
  /** Online API URL. */
  api_url?: string;
  /** Validate SSL certs of the Online API. */
  validate_certs?: boolean;
}

export interface OnlineUserInfoReturn {
  /** Response from Online API. */
  online_user_info?: Record<string, unknown>;
}

export const online_user_info = defineModule<OnlineUserInfoArgs, OnlineUserInfoReturn>("community.general.online_user_info");
