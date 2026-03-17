// Auto-generated from: community.general.nginx_status_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NginxStatusInfoArgs {
  /** HTTP connection timeout in seconds. */
  timeout?: number;
  /** URL of the nginx status. */
  url: string;
}

export interface NginxStatusInfoReturn {
  /** The total number of accepted client connections. */
  accepts?: number;
  /** Active connections. */
  active_connections?: number;
  /** HTTP response as is. */
  data?: string;
  /** The total number of handled connections. Generally, the parameter value is the same as accepts unless some resource limits have been reached. */
  handled?: number;
  /** The current number of connections where nginx is reading the request header. */
  reading?: number;
  /** The total number of client requests. */
  requests?: number;
  /** The current number of idle client connections waiting for a request. */
  waiting?: number;
  /** The current number of connections where nginx is writing the response back to the client. */
  writing?: number;
}

export const nginx_status_info = defineModule<NginxStatusInfoArgs, NginxStatusInfoReturn>("community.general.nginx_status_info");
