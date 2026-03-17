// Auto-generated from: community.general.ipa_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaGroupArgs {
  /** If V(true), add the listed O(user) and O(group) to the group members. */
  append?: boolean;
  /** Canonical name. */
  cn: string;
  /** Description of the group. */
  description?: string;
  /** Allow adding external non-IPA members from trusted domains. */
  external?: boolean;
  /** List of external users assigned to this group. */
  external_user?: string | string[];
  /** GID (use this option to set it manually). */
  gidnumber?: string;
  /** List of group names assigned to this group. */
  group?: string | string[];
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
  /** Create as a non-POSIX group. */
  nonposix?: boolean;
  /** State to ensure. */
  state?: "absent" | "present";
  /** List of user names assigned to this group. */
  user?: string | string[];
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaGroupReturn {
  /** Group as returned by IPA API. */
  group?: Record<string, unknown>;
}

export const ipa_group = defineModule<IpaGroupArgs, IpaGroupReturn>("community.general.ipa_group");
