// Auto-generated from: community.general.ip2location_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Ip2locationInfoArgs {
  /** Set HTTP user agent. */
  http_agent?: string;
  /** IP address to retrieve geolocation information. */
  ip?: string;
  /** HTTP connection timeout in seconds. */
  timeout?: number;
}

export interface Ip2locationInfoReturn {
  /** Dictionary of IP geolocation information for the IP address. */
  record?: unknown;
}

export const ip2location_info = defineModule<Ip2locationInfoArgs, Ip2locationInfoReturn>("community.general.ip2location_info");
