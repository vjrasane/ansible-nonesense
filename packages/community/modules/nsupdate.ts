// Auto-generated from: community.general.nsupdate
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NsupdateArgs {
  /** Specify key algorithm used by O(key_secret). */
  key_algorithm?: "HMAC-MD5.SIG-ALG.REG.INT" | "hmac-md5" | "hmac-sha1" | "hmac-sha224" | "hmac-sha256" | "hmac-sha384" | "hmac-sha512" | "gss-tsig";
  /** Use TSIG key name to authenticate against DNS O(server). */
  key_name?: string;
  /** Use TSIG key secret, associated with O(key_name), to authenticate against O(server). */
  key_secret?: string;
  /** Use this TCP port when connecting to O(server). */
  port?: number;
  /** Sets the transport protocol (TCP or UDP). TCP is the recommended and a more robust option. */
  protocol?: "tcp" | "udp";
  /** Sets the DNS record to modify. When zone is omitted this has to be absolute (ending with a dot). */
  record: string;
  /** Apply DNS modification on this server, specified by IPv4/IPv6 address or FQDN. */
  server: string;
  /** Manage DNS record. */
  state?: "present" | "absent";
  /** Sets the record TTL. */
  ttl?: number;
  /** Sets the record type. */
  type?: string;
  /** Sets the record value. */
  value?: string | string[];
  /** DNS record is modified on this O(zone). */
  zone?: string;
}

export interface NsupdateReturn {
  /** C(dnspython) return code. */
  dns_rc?: number;
  /** C(dnspython) return code (string representation). */
  dns_rc_str?: string;
  /** DNS record. */
  record?: string;
  /** DNS record TTL. */
  ttl?: number;
  /** DNS record type. */
  type?: string;
  /** DNS record value(s). */
  value?: string | string[];
  /** DNS record zone. */
  zone?: string;
}

export const nsupdate = defineModule<NsupdateArgs, NsupdateReturn>("community.general.nsupdate");
