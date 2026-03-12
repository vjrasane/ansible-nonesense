// Auto-generated from: community.general.ipa_sudocmd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaSudocmdArgs {
  /** A description of this command. */
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
  /** Sudo command. */
  sudocmd: string;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaSudocmdReturn {
  /** Sudo command as return from IPA API. */
  sudocmd?: Record<string, unknown>;
}

export const ipa_sudocmd = defineModule<IpaSudocmdArgs, IpaSudocmdReturn>("community.general.ipa_sudocmd");
