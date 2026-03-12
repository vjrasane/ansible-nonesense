// Auto-generated from: community.general.memset_zone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MemsetZoneArgs {
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** Forces deletion of a zone and all zone domains/zone records it contains. */
  force?: boolean;
  /** The zone nickname; usually the same as the main domain. Ensure this value has at most 250 characters. */
  name: string;
  /** Indicates desired state of resource. */
  state: "absent" | "present";
  /** The default TTL for all records created in the zone. This must be a valid int from U(https://www.memset.com/apidocs/methods_dns.html#dns.zone_create). */
  ttl?: number;
}

export interface MemsetZoneReturn {
  /** Zone info from the Memset API. */
  memset_api?: unknown;
}

export const memset_zone = defineModule<MemsetZoneArgs, MemsetZoneReturn>("community.general.memset_zone");
