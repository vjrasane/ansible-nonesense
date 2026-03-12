// Auto-generated from: community.general.online_server_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OnlineServerInfoArgs {
  /** HTTP timeout to Online API in seconds. */
  api_timeout?: number;
  /** Online OAuth token. */
  api_token: string;
  /** Online API URL. */
  api_url?: string;
  /** Validate SSL certs of the Online API. */
  validate_certs?: boolean;
}

export interface OnlineServerInfoReturn {
  /** Response from Online API. */
  online_server_info?: Record<string, unknown> | Record<string, unknown>[];
}

export const online_server_info = defineModule<OnlineServerInfoArgs, OnlineServerInfoReturn>("community.general.online_server_info");
