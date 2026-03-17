// Auto-generated from: community.general.ipa_hostgroup
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaHostgroupArgs {
  /** If V(true), add the listed O(host) to the O(hostgroup). */
  append?: boolean;
  /** Name of host-group. */
  cn: string;
  /** Description. */
  description?: string;
  /** List of hosts that belong to the host-group. */
  host?: string | string[];
  /** List of host-groups than belong to that host-group. */
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
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaHostgroupReturn {
  /** Hostgroup as returned by IPA API. */
  hostgroup?: Record<string, unknown>;
}

export const ipa_hostgroup = defineModule<IpaHostgroupArgs, IpaHostgroupReturn>("community.general.ipa_hostgroup");
