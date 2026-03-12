// Auto-generated from: community.general.udm_dns_zone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UdmDnsZoneArgs {
  /** Contact person in the SOA record. */
  contact?: string;
  /** Specifies the upper limit on the time interval that can elapse before the zone is no longer authoritative. */
  expire?: number;
  /** List of interface IP addresses, on which the server should response this zone. Required if O(state=present). */
  interfaces?: string | string[];
  /** List of MX servers. (Must declared as A or AAAA records). */
  mx?: string | string[];
  /** List of appropriate name servers. Required if O(state=present). */
  nameserver?: string | string[];
  /** Interval before the zone should be refreshed. */
  refresh?: number;
  /** Interval that should elapse before a failed refresh should be retried. */
  retry?: number;
  /** Whether the DNS zone is present or not. */
  state?: "present" | "absent";
  /** Minimum TTL field that should be exported with any RR from this zone. */
  ttl?: number;
  /** Define if the zone is a forward or reverse DNS zone. */
  type: string;
  /** DNS zone name, for example V(example.com). */
  zone: string;
}

export type UdmDnsZoneReturn = Record<string, unknown>;

export const udm_dns_zone = defineModule<UdmDnsZoneArgs, UdmDnsZoneReturn>("community.general.udm_dns_zone");
