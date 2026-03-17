// Auto-generated from: community.general.ldap_inc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LdapIncArgs {
  /** The attribute to increment. */
  attribute: string;
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
  /** The DN entry containing the attribute to increment. */
  dn: string;
  /** The value of the increment to apply. */
  increment?: number;
  /** If V(auto), the module determines automatically the method to use. */
  method?: "auto" | "rfc4525" | "legacy";
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

export interface LdapIncReturn {
  /** The name of the attribute that was incremented. */
  attribute?: string;
  /** It is set to V(true) if the attribute value has changed. */
  incremented?: boolean;
  /** Is V(true) if the method used to increment is based on RFC4525, V(false) if legacy. */
  rfc4525?: boolean;
  /** The new value after incrementing. */
  value?: string;
}

export const ldap_inc = defineModule<LdapIncArgs, LdapIncReturn>("community.general.ldap_inc");
