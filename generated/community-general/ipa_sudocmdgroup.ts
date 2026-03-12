// Auto-generated from: community.general.ipa_sudocmdgroup
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaSudocmdgroupArgs {
  /** Sudo Command Group. */
  cn: string;
  /** Group description. */
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
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** List of sudo commands to assign to the group. */
  sudocmd?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaSudocmdgroupReturn {
  /** Sudo command group as returned by IPA API. */
  sudocmdgroup?: Record<string, unknown>;
}

export const ipa_sudocmdgroup = defineModule<IpaSudocmdgroupArgs, IpaSudocmdgroupReturn>("community.general.ipa_sudocmdgroup");
