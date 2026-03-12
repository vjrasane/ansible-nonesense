// Auto-generated from: community.general.ldap_attrs
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LdapAttrsArgs {
  /** The attribute(s) and value(s) to add or remove. */
  attributes: Record<string, unknown>;
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
  /** The DN of the entry to add or remove. */
  dn: string;
  /** If V(true), prepend list values with X-ORDERED index numbers in all attributes specified in the current task. This is useful mostly with C(olcAccess) attribute to easily manage LDAP Access Control Lists. */
  ordered?: boolean;
  /** Set the referrals chasing behavior. */
  referrals_chasing?: "disabled" | "anonymous";
  /** The class to use for SASL authentication. */
  sasl_class?: "external" | "gssapi";
  /** The O(server_uri) parameter may be a comma- or whitespace-separated list of URIs containing only the schema, the host, and the port fields. */
  server_uri?: string;
  /** Use the START_TLS LDAP extension if set to V(true). */
  start_tls?: boolean;
  /** The state of the attribute values. If V(present), all given attribute values are added if they are missing. If V(absent), all given attribute values are removed if present. If V(exact), the set of attribute values is forced to exactly those provided and no others. If O(state=exact) and the attribute value is empty, all values for this attribute are removed. */
  state?: "present" | "absent" | "exact";
  /** If set to V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Set the behavior on how to process Xordered DNs. */
  xorder_discovery?: "enable" | "auto" | "disable";
}

export interface LdapAttrsReturn {
  /** List of modified parameters. */
  modlist?: string | string[];
}

export const ldap_attrs = defineModule<LdapAttrsArgs, LdapAttrsReturn>("community.general.ldap_attrs");
