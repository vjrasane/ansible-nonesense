// Auto-generated from: community.general.ipbase_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpbaseInfoArgs {
  /** The API key for the request if you need more requests. */
  apikey?: string;
  /** If the O(hostname) parameter is set to V(true), the API response contains the hostname of the IP. */
  hostname?: boolean;
  /** The IP you want to get the info for. If not specified the API detects the IP automatically. */
  ip?: string;
  /** An ISO Alpha 2 Language Code for localizing the IP data. */
  language?: string;
}

export interface IpbaseInfoReturn {
  /** JSON parsed response from ipbase.com. Please refer to U(https://ipbase.com/docs/info) for the detailed structure of the response. */
  data?: Record<string, unknown>;
}

export const ipbase_info = defineModule<IpbaseInfoArgs, IpbaseInfoReturn>("community.general.ipbase_info");
