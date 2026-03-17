// Auto-generated from: community.general.netcup_dns
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NetcupDnsArgs {
  /** API key for authentication, must be obtained using the netcup CCP (U(https://ccp.netcup.net)). */
  api_key: string;
  /** API password for authentication, must be obtained using the netcup CCP (U(https://ccp.netcup.net)). */
  api_password: string;
  /** Netcup customer ID. */
  customer_id: number;
  /** Domainname the records should be added / removed. */
  domain: string;
  /** Record priority. Required for O(type=MX). */
  priority?: number;
  /** Record to add or delete, supports wildcard (V(*)). Default is V(@) (that is, the zone name). */
  record?: string;
  /** Whether the record should be the only one for that record type and record name. Only use with O(state=present). */
  solo?: boolean;
  /** Whether the record should exist or not. */
  state?: "present" | "absent";
  /** HTTP(S) connection timeout in seconds. */
  timeout?: number;
  /** Record type. */
  type: "A" | "AAAA" | "MX" | "CNAME" | "CAA" | "SRV" | "TXT" | "TLSA" | "NS" | "DS" | "OPENPGPKEY" | "SMIMEA" | "SSHFP";
  /** Record value. */
  value: string;
}

export interface NetcupDnsReturn {
  /** List containing all records. */
  records?: Record<string, unknown> | Record<string, unknown>[];
}

export const netcup_dns = defineModule<NetcupDnsArgs, NetcupDnsReturn>("community.general.netcup_dns");
