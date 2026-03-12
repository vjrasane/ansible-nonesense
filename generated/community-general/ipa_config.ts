// Auto-generated from: community.general.ipa_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaConfigArgs {
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
  /** Extra hashes to generate in password plug-in. */
  ipaconfigstring?: "AllowNThash" | "KDC:Disable Last Success" | "KDC:Disable Lockout" | "KDC:Disable Default Preauth for SPNs";
  /** Default e-mail domain for new users. */
  ipadefaultemaildomain?: string;
  /** Default shell for new users. */
  ipadefaultloginshell?: string;
  /** Default group for new users. */
  ipadefaultprimarygroup?: string;
  /** A list of group objectclasses. */
  ipagroupobjectclasses?: string | string[];
  /** A list of fields to search in when searching for groups. */
  ipagroupsearchfields?: string | string[];
  /** Default location of home directories. */
  ipahomesrootdir?: string;
  /** Default types of PAC supported for services. */
  ipakrbauthzdata?: "MS-PAC" | "PAD" | "nfs:NONE";
  /** Maximum length of usernames. */
  ipamaxusernamelength?: number;
  /** Notice of impending password expiration, in days. */
  ipapwdexpadvnotify?: number;
  /** Maximum number of records to search (-1 or 0 is unlimited). */
  ipasearchrecordslimit?: number;
  /** Maximum amount of time (seconds) for a search (-1 or 0 is unlimited). */
  ipasearchtimelimit?: number;
  /** The SELinux user map order (order in increasing priority of SELinux users). */
  ipaselinuxusermaporder?: string | string[];
  /** The authentication type to use by default. */
  ipauserauthtype?: "password" | "radius" | "otp" | "pkinit" | "hardened" | "idp" | "passkey" | "disabled";
  /** A list of user objectclasses. */
  ipauserobjectclasses?: string | string[];
  /** A list of fields to search in when searching for users. */
  ipausersearchfields?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaConfigReturn {
  /** Configuration as returned by IPA API. */
  config?: Record<string, unknown>;
}

export const ipa_config = defineModule<IpaConfigArgs, IpaConfigReturn>("community.general.ipa_config");
