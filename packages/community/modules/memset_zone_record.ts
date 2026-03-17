// Auto-generated from: community.general.memset_zone_record
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MemsetZoneRecordArgs {
  /** The address for this record (can be IP or text string depending on record type). */
  address: string;
  /** The API key obtained from the Memset control panel. */
  api_key: string;
  /** C(SRV) and C(TXT) record priority, in the range 0 > 999 (inclusive). */
  priority?: number;
  /** The subdomain to create. */
  record?: string;
  /** If set then the current domain is added onto the address field for C(CNAME), C(MX), C(NS) and C(SRV)record types. */
  relative?: boolean;
  /** Indicates desired state of resource. */
  state?: "absent" | "present";
  /** The record's TTL in seconds (will inherit zone's TTL if not explicitly set). This must be a valid int from U(https://www.memset.com/apidocs/methods_dns.html#dns.zone_record_create). */
  ttl?: number;
  /** The type of DNS record to create. */
  type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "SRV" | "TXT";
  /** The name of the zone to which to add the record to. */
  zone: string;
}

export interface MemsetZoneRecordReturn {
  /** Record info from the Memset API. */
  memset_api?: unknown;
}

export const memset_zone_record = defineModule<MemsetZoneRecordArgs, MemsetZoneRecordReturn>("community.general.memset_zone_record");
