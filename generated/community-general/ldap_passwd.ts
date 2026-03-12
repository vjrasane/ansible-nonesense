// Auto-generated from: community.general.ldap_passwd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LdapPasswdArgs {
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
  /** The (plaintext) password to be set for O(dn). */
  passwd?: string;
  /** Set the referrals chasing behavior. */
  referrals_chasing?: "disabled" | "anonymous";
  /** The class to use for SASL authentication. */
  sasl_class?: "external" | "gssapi";
  /** The O(server_uri) parameter may be a comma- or whitespace-separated list of URIs containing only the schema, the host, and the port fields. */
  server_uri?: string;
  /** Use the START_TLS LDAP extension if set to V(true). */
  start_tls?: boolean;
  /** If set to V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Set the behavior on how to process Xordered DNs. */
  xorder_discovery?: "enable" | "auto" | "disable";
}

export interface LdapPasswdReturn {
  /** List of modified parameters. */
  modlist?: string | string[];
}

export const ldap_passwd = defineModule<LdapPasswdArgs, LdapPasswdReturn>("community.general.ldap_passwd");
