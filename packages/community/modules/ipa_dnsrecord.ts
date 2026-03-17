// Auto-generated from: community.general.ipa_dnsrecord
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaDnsrecordArgs {
  /** IP or hostname of IPA server. */
  ipa_host?: string;
  /** Password of administrative user. */
  ipa_pass?: string;
  /** Port of FreeIPA / IPA server. */
  ipa_port?: number;
  /** Protocol used by IPA server. */
  ipa_prot?: "http" | "https";
  /** Specifies idle timeout (in seconds) for the connection. */
  ipa_timeout?: number;
  /** Administrative account used on IPA server. */
  ipa_user?: string;
  /** The DNS record name to manage. */
  record_name: string;
  /** Set the TTL for the record. */
  record_ttl?: number;
  /** The type of DNS record name. */
  record_type?: "A" | "AAAA" | "A6" | "CNAME" | "DNAME" | "MX" | "NS" | "PTR" | "SRV" | "TXT" | "SSHFP";
  /** Manage DNS record name with this value. */
  record_value?: string;
  /** Manage DNS record name with this value. */
  record_values?: string | string[];
  /** State to ensure. */
  state?: "absent" | "present";
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
  /** The DNS zone name to which DNS record needs to be managed. */
  zone_name: string;
}

export interface IpaDnsrecordReturn {
  /** DNS record as returned by IPA API. */
  dnsrecord?: Record<string, unknown>;
}

export const ipa_dnsrecord = defineModule<IpaDnsrecordArgs, IpaDnsrecordReturn>("community.general.ipa_dnsrecord");
