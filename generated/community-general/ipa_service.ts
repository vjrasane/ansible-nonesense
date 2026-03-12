// Auto-generated from: community.general.ipa_service
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaServiceArgs {
  /** Force principal name even if host is not in DNS. */
  force?: boolean;
  /** Defines the list of C(ManagedBy) hosts. */
  hosts?: string | string[];
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
  /** Principal of the service. */
  krbcanonicalname: string;
  /** Force service to be created even when host object does not exist to manage it. */
  skip_host_check?: boolean;
  /** State to ensure. */
  state?: "absent" | "present";
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaServiceReturn {
  /** Service as returned by IPA API. */
  service?: Record<string, unknown>;
}

export const ipa_service = defineModule<IpaServiceArgs, IpaServiceReturn>("community.general.ipa_service");
