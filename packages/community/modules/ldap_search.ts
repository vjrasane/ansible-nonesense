// Auto-generated from: community.general.ldap_search
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LdapSearchArgs {
  /** A list of attributes for limiting the result. Use an actual list or a comma-separated string. */
  attrs?: string | string[];
  /** If provided, all attribute values returned that are listed in this option are Base64 encoded. */
  base64_attributes?: string | string[];
  /** A DN to bind with. Try to use a SASL bind with the EXTERNAL mechanism as default when this parameter is omitted. */
  bind_dn?: string;
  /** The password to use with O(bind_dn). */
  bind_pw?: string;
  /** Set the path to PEM file with CA certs. */
  ca_path?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** The LDAP DN to search in. */
  dn: string;
  /** Used for filtering the LDAP search result. */
  filter?: string;
  /** The page size when performing a simple paged result search (RFC 2696). This setting can be tuned to reduce issues with timeouts and server limits. */
  page_size?: number;
  /** Set the referrals chasing behavior. */
  referrals_chasing?: "disabled" | "anonymous";
  /** The class to use for SASL authentication. */
  sasl_class?: "external" | "gssapi";
  /** Set to V(true) to return the full attribute schema of entries, not their attribute values. Overrides O(attrs) when provided. */
  schema?: boolean;
  /** The LDAP scope to use. */
  scope?: "base" | "onelevel" | "subordinate" | "children";
  /** The O(server_uri) parameter may be a comma- or whitespace-separated list of URIs containing only the schema, the host, and the port fields. */
  server_uri?: string;
  /** Use the START_TLS LDAP extension if set to V(true). */
  start_tls?: boolean;
  /** If set to V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Set the behavior on how to process Xordered DNs. */
  xorder_discovery?: "enable" | "auto" | "disable";
}

export type LdapSearchReturn = Record<string, unknown>;

export const ldap_search = defineModule<LdapSearchArgs, LdapSearchReturn>("community.general.ldap_search");
