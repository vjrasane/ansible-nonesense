// Auto-generated from: community.general.ipa_otptoken
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaOtptokenArgs {
  /** Token hash algorithm. */
  algorithm?: "sha1" | "sha256" | "sha384" | "sha512";
  /** Initial counter for the HOTP token. */
  counter?: number;
  /** Description of the token (informational only). */
  description?: string;
  /** Number of digits each token code has. */
  digits?: number;
  /** Mark the token as enabled (default V(true)). */
  enabled?: boolean;
  /** Length of TOTP token code validity in seconds. */
  interval?: number;
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
  /** Token model (informational only). */
  model?: string;
  /** If specified, the unique ID specified is changed to this. */
  newuniqueid?: string;
  /** Last date/time the token can be used. */
  notafter?: string;
  /** First date/time the token can be used. */
  notbefore?: string;
  /** TOTP token / IPA server time difference. */
  offset?: number;
  /** Type of OTP. */
  otptype?: "totp" | "hotp";
  /** Assigned user of the token. */
  owner?: string;
  /** Token secret (Base64). */
  secretkey?: string;
  /** Token serial (informational only). */
  serial?: string;
  /** State to ensure. */
  state?: "present" | "absent";
  /** Unique ID of the token in IPA. */
  uniqueid: string;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
  /** Token vendor name (informational only). */
  vendor?: string;
}

export interface IpaOtptokenReturn {
  /** OTP Token as returned by IPA API. */
  otptoken?: Record<string, unknown>;
}

export const ipa_otptoken = defineModule<IpaOtptokenArgs, IpaOtptokenReturn>("community.general.ipa_otptoken");
