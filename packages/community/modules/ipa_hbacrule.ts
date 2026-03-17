// Auto-generated from: community.general.ipa_hbacrule
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaHbacruleArgs {
  /** Canonical name. */
  cn: string;
  /** Description. */
  description?: string;
  /** List of host names to assign. */
  host?: string | string[];
  /** Host category. */
  hostcategory?: "all";
  /** List of hostgroup names to assign. */
  hostgroup?: string | string[];
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
  /** List of service names to assign. */
  service?: string | string[];
  /** Service category. */
  servicecategory?: "all";
  /** List of service group names to assign. */
  servicegroup?: string | string[];
  /** List of source host names to assign. */
  sourcehost?: string | string[];
  /** Source host category. */
  sourcehostcategory?: "all";
  /** List of source host group names to assign. */
  sourcehostgroup?: string | string[];
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** List of user names to assign. */
  user?: string | string[];
  /** User category. */
  usercategory?: "all";
  /** List of user group names to assign. */
  usergroup?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaHbacruleReturn {
  /** HBAC rule as returned by IPA API. */
  hbacrule?: Record<string, unknown>;
}

export const ipa_hbacrule = defineModule<IpaHbacruleArgs, IpaHbacruleReturn>("community.general.ipa_hbacrule");
