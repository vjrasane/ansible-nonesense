// Auto-generated from: community.general.cloudflare_dns
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CloudflareDnsArgs {
  /** Account API key. */
  account_api_key?: string;
  /** Account email. Required for API keys authentication. */
  account_email?: string;
  /** Algorithm number. */
  algorithm?: number;
  /** API token. */
  api_token?: string;
  /** Certificate usage number. */
  cert_usage?: number;
  /** Comments or notes about the DNS record. */
  comment?: string;
  /** Issuer Critical Flag. */
  flag?: number;
  /** Hash type number. */
  hash_type?: number;
  /** DNSSEC key tag. */
  key_tag?: number;
  /** Service port. */
  port?: number;
  /** Record priority. */
  priority?: number;
  /** Service protocol. Required for O(type=SRV) and O(type=TLSA). */
  proto?: string;
  /** Proxy through Cloudflare network or just use DNS. */
  proxied?: boolean;
  /** Record to add. */
  record?: string;
  /** Selector number. */
  selector?: number;
  /** Record service. */
  service?: string;
  /** Whether the record should be the only one for that record type and record name. */
  solo?: boolean;
  /** Whether the record(s) should exist or not. */
  state?: "absent" | "present";
  /** CAA issue restriction. */
  tag?: "issue" | "issuewild" | "iodef";
  /** Custom tags for the DNS record. */
  tags?: string | string[];
  /** Timeout for Cloudflare API calls. */
  timeout?: number;
  /** The TTL to give the new record. */
  ttl?: number;
  /** The type of DNS record to create. Required if O(state=present). */
  type?: "A" | "AAAA" | "CNAME" | "DS" | "MX" | "NS" | "SRV" | "SSHFP" | "TLSA" | "CAA" | "TXT" | "PTR";
  /** The record value. */
  value?: string;
  /** Service weight. */
  weight?: number;
  /** The name of the Zone to work with (for example V(example.com)). */
  zone: string;
}

export interface CloudflareDnsReturn {
  /** A dictionary containing the record data. */
  record?: unknown;
}

export const cloudflare_dns = defineModule<CloudflareDnsArgs, CloudflareDnsReturn>("community.general.cloudflare_dns");
