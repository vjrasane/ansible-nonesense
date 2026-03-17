// Auto-generated from: community.general.ipa_pwpolicy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaPwpolicyArgs {
  /** Check whether the password (with possible modifications) matches a word in a dictionary (using cracklib). */
  dictcheck?: boolean;
  /** Period (in seconds) after which the number of failed login attempts is reset. */
  failinterval?: string;
  /** Maximum number of LDAP logins after password expiration. */
  gracelimit?: number;
  /** Name of the group that the policy applies to. */
  group?: string;
  /** Number of previous passwords that are remembered. */
  historylength?: string;
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
  /** Period (in seconds) for which users are locked out. */
  lockouttime?: string;
  /** Maximum number of consecutive failures before lockout. */
  maxfailcount?: string;
  /** Maximum password lifetime (in days). */
  maxpwdlife?: string;
  /** Maximum number of allowed same consecutive characters in the new password. */
  maxrepeat?: number;
  /** Maximum length of monotonic character sequences in the new password. An example of a monotonic sequence of length 5 is V(12345). */
  maxsequence?: number;
  /** Minimum number of character classes. */
  minclasses?: string;
  /** Minimum password length. */
  minlength?: string;
  /** Minimum password lifetime (in hours). */
  minpwdlife?: string;
  /** Priority of the policy. */
  priority?: string;
  /** State to ensure. */
  state?: "absent" | "present";
  /** Check whether the password (with possible modifications) contains the user name in some form (if the name has > 3 characters). */
  usercheck?: boolean;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaPwpolicyReturn {
  /** Password policy as returned by IPA API. */
  pwpolicy?: Record<string, unknown>;
}

export const ipa_pwpolicy = defineModule<IpaPwpolicyArgs, IpaPwpolicyReturn>("community.general.ipa_pwpolicy");
