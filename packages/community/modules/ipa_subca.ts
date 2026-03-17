// Auto-generated from: community.general.ipa_subca
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpaSubcaArgs {
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
  /** The Sub Certificate Authority's description. */
  subca_desc?: string;
  /** The Sub Certificate Authority name which needs to be managed. */
  subca_name: string;
  /** The Sub Certificate Authority's Subject, for example V(CN=SampleSubCA1,O=testrelm.test). */
  subca_subject: string;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaSubcaReturn {
  /** IPA Sub CA record as returned by IPA API. */
  subca?: Record<string, unknown>;
}

export const ipa_subca = defineModule<IpaSubcaArgs, IpaSubcaReturn>("community.general.ipa_subca");
