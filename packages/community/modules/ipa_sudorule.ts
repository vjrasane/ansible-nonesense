// Auto-generated from: community.general.ipa_sudorule
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaSudoruleArgs {
  /** List of commands assigned to the rule. */
  cmd?: string | string[];
  /** Command category the rule applies to. */
  cmdcategory?: "all";
  /** List of command groups assigned to the rule. */
  cmdgroup?: string | string[];
  /** Canonical name. */
  cn: string;
  /** List of denied commands assigned to the rule. */
  deny_cmd?: string | string[];
  /** List of denied command groups assigned to the rule. */
  deny_cmdgroup?: string | string[];
  /** Description of the sudo rule. */
  description?: string;
  /** List of hosts assigned to the rule. */
  host?: string | string[];
  /** Host category the rule applies to. */
  hostcategory?: "all";
  /** List of host groups assigned to the rule. */
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
  /** List of external RunAs users. */
  runasextusers?: string | string[];
  /** RunAs Group category the rule applies to. */
  runasgroupcategory?: "all";
  /** RunAs User category the rule applies to. */
  runasusercategory?: "all";
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** List of options to add to the sudo rule. */
  sudoopt?: string | string[];
  /** List of users assigned to the rule. */
  user?: string | string[];
  /** User category the rule applies to. */
  usercategory?: "all";
  /** List of user groups assigned to the rule. */
  usergroup?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaSudoruleReturn {
  /** Sudorule as returned by IPA. */
  sudorule?: Record<string, unknown>;
}

export const ipa_sudorule = defineModule<IpaSudoruleArgs, IpaSudoruleReturn>("community.general.ipa_sudorule");
