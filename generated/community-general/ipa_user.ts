// Auto-generated from: community.general.ipa_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaUserArgs {
  /** Display name. */
  displayname?: string;
  /** Posix Group ID. */
  gidnumber?: string;
  /** First name. */
  givenname?: string;
  /** Default home directory of the user. */
  homedirectory?: string;
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
  /** Date at which the user password expires. */
  krbpasswordexpiration?: string;
  /** Login shell. */
  loginshell?: string;
  /** List of mail addresses assigned to the user. */
  mail?: string | string[];
  /** Password for a user. */
  password?: string;
  /** Surname. */
  sn?: string;
  /** List of public SSH key. */
  sshpubkey?: string | string[];
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** List of telephone numbers assigned to the user. */
  telephonenumber?: string | string[];
  /** Title. */
  title?: string;
  /** Uid of the user. */
  uid: string;
  /** Account Settings UID/Posix User ID number. */
  uidnumber?: string;
  /** Set password for a user. */
  update_password?: "always" | "on_create";
  /** The authentication type to use for the user. */
  userauthtype?: "password" | "radius" | "otp" | "pkinit" | "hardened" | "idp" | "passkey";
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaUserReturn {
  /** User as returned by IPA API. */
  user?: Record<string, unknown>;
}

export const ipa_user = defineModule<IpaUserArgs, IpaUserReturn>("community.general.ipa_user");
