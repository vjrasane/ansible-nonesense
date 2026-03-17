// Auto-generated from: community.general.ipa_otpconfig
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaOtpconfigArgs {
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
  /** HOTP authentication window in number of hops. */
  ipatokenhotpauthwindow?: number;
  /** HOTP synchronization window in hops. */
  ipatokenhotpsyncwindow?: number;
  /** TOTP authentication window in seconds. */
  ipatokentotpauthwindow?: number;
  /** TOTP synchronization window in seconds. */
  ipatokentotpsyncwindow?: number;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaOtpconfigReturn {
  /** OTP configuration as returned by IPA API. */
  otpconfig?: Record<string, unknown>;
}

export const ipa_otpconfig = defineModule<IpaOtpconfigArgs, IpaOtpconfigReturn>("community.general.ipa_otpconfig");
