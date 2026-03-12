// Auto-generated from: community.general.ipa_dnszone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaDnszoneArgs {
  /** Allow synchronization of forward and reverse records in the zone. */
  allowsyncptr?: boolean;
  /** Apply dynamic update to zone. */
  dynamicupdate?: boolean;
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
  state?: "absent" | "present";
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
  /** The DNS zone name to which needs to be managed. */
  zone_name: string;
}

export interface IpaDnszoneReturn {
  /** DNS zone as returned by IPA API. */
  zone?: Record<string, unknown>;
}

export const ipa_dnszone = defineModule<IpaDnszoneArgs, IpaDnszoneReturn>("community.general.ipa_dnszone");
