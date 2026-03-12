// Auto-generated from: community.general.ipa_getkeytab
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaGetkeytabArgs {
  /** The LDAP DN to bind as when retrieving a keytab without Kerberos credentials. */
  bind_dn?: string;
  /** The LDAP password to use when not binding with Kerberos. */
  bind_pw?: string;
  /** The path to the IPA CA certificate used to validate LDAPS/STARTTLS connections. */
  ca_cert?: string;
  /** The list of encryption types to use to generate keys. */
  encryption_types?: string;
  /** Force recreation if exists already. */
  force?: boolean;
  /** The IPA server to retrieve the keytab from (FQDN). */
  ipa_host?: string;
  /** LDAP URI. If V(ldap://) is specified, STARTTLS is initiated by default. */
  ldap_uri?: string;
  /** Use this password for the key instead of one randomly generated. */
  password?: string;
  /** The base path where to put generated keytab file. */
  path: string;
  /** The non-realm part of the full principal name. */
  principal: string;
  /** Retrieve an existing key from the server instead of generating a new one. */
  retrieve_mode?: boolean;
  /** SASL mechanism to use if O(bind_dn) and O(bind_pw) are not specified. */
  sasl_mech?: "GSSAPI" | "EXTERNAL";
  /** The state of the keytab file. */
  state?: "present" | "absent";
}

export type IpaGetkeytabReturn = Record<string, unknown>;

export const ipa_getkeytab = defineModule<IpaGetkeytabArgs, IpaGetkeytabReturn>("community.general.ipa_getkeytab");
