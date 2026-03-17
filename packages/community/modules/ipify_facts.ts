// Auto-generated from: community.general.ipify_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpifyFactsArgs {
  /** URL of the ipify.org API service. */
  api_url?: string;
  /** HTTP connection timeout in seconds. */
  timeout?: number;
  /** When set to V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface IpifyFactsReturn {
  /** Public IP of the internet gateway. */
  ipify_public_ip?: string;
}

export const ipify_facts = defineModule<IpifyFactsArgs, IpifyFactsReturn>("community.general.ipify_facts");
