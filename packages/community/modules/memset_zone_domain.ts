// Auto-generated from: community.general.memset_zone_domain
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MemsetZoneDomainArgs {
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** The zone domain name. Ensure this value has at most 250 characters. */
  domain: string;
  /** Indicates desired state of resource. */
  state?: "absent" | "present";
  /** The zone to add the domain to (this must already exist). */
  zone: string;
}

export interface MemsetZoneDomainReturn {
  /** Domain info from the Memset API. */
  memset_api?: unknown;
}

export const memset_zone_domain = defineModule<MemsetZoneDomainArgs, MemsetZoneDomainReturn>("community.general.memset_zone_domain");
