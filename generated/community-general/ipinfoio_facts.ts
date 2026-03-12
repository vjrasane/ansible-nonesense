// Auto-generated from: community.general.ipinfoio_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpinfoioFactsArgs {
  /** Set http user agent. */
  http_agent?: string;
  /** HTTP connection timeout in seconds. */
  timeout?: number;
}

export interface IpinfoioFactsReturn {
  /** Dictionary of IP geolocation facts for a host's IP address. */
  ansible_facts?: unknown;
}

export const ipinfoio_facts = defineModule<IpinfoioFactsArgs, IpinfoioFactsReturn>("community.general.ipinfoio_facts");
