// Auto-generated from: community.general.ipa_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpaHostArgs {
  /** A description of this host. */
  description?: string;
  /** Force host name even if not in DNS. */
  force?: boolean;
  /** Create host if O(state=disabled) or O(state=enabled) but not present. */
  force_creation?: boolean;
  /** Full qualified domain name. */
  fqdn: string;
  /** Add the host to DNS with this IP address. */
  ip_address?: string;
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
  /** Host locality (for example V(Baltimore, MD)). */
  l?: string;
  /** List of Hardware MAC address(es) off this host. */
  mac_address?: string | string[];
  /** Host hardware platform (for example V(Lenovo T61")). */
  ns_hardware_platform?: string;
  /** Host location (for example V(Lab 2)). */
  ns_host_location?: string;
  /** Host operating system and version (for example V(Fedora 9)). */
  ns_os_version?: string;
  /** Generate a random password to be used in bulk enrollment. */
  random_password?: boolean;
  /** State to ensure. */
  state?: "absent" | "disabled" | "enabled" | "present";
  /** If set V(true) with O(state=absent), then removes DNS records of the host managed by FreeIPA DNS. */
  update_dns?: boolean;
  /** List of Base-64 encoded server certificates. */
  user_certificate?: string | string[];
  /** Host category (semantics placed on this attribute are for local interpretation). */
  userclass?: string;
  /** This only applies if O(ipa_prot) is V(https). */
  validate_certs?: boolean;
}

export interface IpaHostReturn {
  /** Host as returned by IPA API. */
  host?: Record<string, unknown>;
  /** List of options that differ and would be changed. */
  host_diff?: string | string[];
}

export const ipa_host = defineModule<IpaHostArgs, IpaHostReturn>("community.general.ipa_host");
