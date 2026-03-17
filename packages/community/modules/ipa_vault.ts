// Auto-generated from: community.general.ipa_vault
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaVaultArgs {
  /** Vault name. */
  cn: string;
  /** Description. */
  description?: string;
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
  /** Public key. */
  ipavaultpublickey?: string;
  /** Vault Salt. */
  ipavaultsalt?: string;
  /** Vault types are based on security level. */
  ipavaulttype?: "asymmetric" | "standard" | "symmetric";
  /** Force replace the existent vault on IPA server. */
  replace?: "True" | "False";
  /** Any service can own one or more service vaults. */
  service?: string;
  /** State to ensure. */
  state?: "absent" | "present";
  /** Any user can own one or more user vaults. */
  username?: string | string[];
  /** Validate IPA server certificates. */
  validate_certs?: boolean;
}

export interface IpaVaultReturn {
  /** Vault as returned by IPA API. */
  vault?: Record<string, unknown>;
}

export const ipa_vault = defineModule<IpaVaultArgs, IpaVaultReturn>("community.general.ipa_vault");
