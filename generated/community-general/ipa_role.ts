// Auto-generated from: community.general.ipa_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaRoleArgs {
  /** Role name. */
  cn: string;
  /** A description of this role-group. */
  description?: string;
  /** List of group names assign to this role. */
  group?: string | string[];
  /** List of host names to assign. */
  host?: string | string[];
  /** List of host group names to assign. */
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
  /** List of privileges granted to the role. */
  privilege?: string | string[];
  /** List of service names to assign. */
  service?: string | string[];
  /** State to ensure. */
  state?: "absent" | "present";
  /** List of user names to assign. */
  user?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaRoleReturn {
  /** Role as returned by IPA API. */
  role?: Record<string, unknown>;
}

export const ipa_role = defineModule<IpaRoleArgs, IpaRoleReturn>("community.general.ipa_role");
