// Auto-generated from: community.general.dnsimple
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DnsimpleArgs {
  /** Account API token. See O(account_email) for more information. */
  account_api_token?: string;
  /** Account email. If omitted, the environment variables E(DNSIMPLE_EMAIL) and E(DNSIMPLE_API_TOKEN) are looked for. */
  account_email?: string;
  /** Domain to work with. Can be the domain name (for example V(mydomain.com)) or the numeric ID of the domain in DNSimple. */
  domain?: string;
  /** Record priority. */
  priority?: number;
  /** Record to add, if blank a record for the domain is created, supports the wildcard (*). */
  record?: string;
  /** List of records to ensure they either exist or do not exist. */
  record_ids?: string | string[];
  /** Use the DNSimple sandbox environment. */
  sandbox?: boolean;
  /** Whether the record should be the only one for that record type and record name. */
  solo?: boolean;
  /** Whether the record should exist or not. */
  state?: "present" | "absent";
  /** The TTL to give the new record in seconds. */
  ttl?: number;
  /** The type of DNS record to create. */
  type?: "A" | "ALIAS" | "CNAME" | "MX" | "SPF" | "URL" | "TXT" | "NS" | "SRV" | "NAPTR" | "PTR" | "AAAA" | "SSHFP" | "HINFO" | "POOL" | "CAA";
  /** Record value. */
  value?: string;
}

export type DnsimpleReturn = Record<string, unknown>;

export const dnsimple = defineModule<DnsimpleArgs, DnsimpleReturn>("community.general.dnsimple");
