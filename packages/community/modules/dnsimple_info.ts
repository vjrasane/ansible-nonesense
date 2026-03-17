// Auto-generated from: community.general.dnsimple_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DnsimpleInfoArgs {
  /** The account ID to query. */
  account_id: string;
  /** The API key to use. */
  api_key: string;
  /** The domain name to retrieve info from. */
  name?: string;
  /** The record to find. */
  record?: string;
  /** Whether or not to use sandbox environment. */
  sandbox?: boolean;
}

export interface DnsimpleInfoReturn {
  /** Returns a list of dictionaries of all domains associated with the supplied account ID. */
  dnsimple_domain_info?: Record<string, unknown> | Record<string, unknown>[];
  /** Returns a list of dictionaries that match the record supplied. */
  dnsimple_record_info?: Record<string, unknown> | Record<string, unknown>[];
  /** Returns a list of dictionaries with all records for the domain supplied. */
  dnsimple_records_info?: Record<string, unknown> | Record<string, unknown>[];
}

export const dnsimple_info = defineModule<DnsimpleInfoArgs, DnsimpleInfoReturn>("community.general.dnsimple_info");
