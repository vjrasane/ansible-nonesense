// Auto-generated from: community.general.apache2_mod_proxy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface Apache2ModProxyArgs {
  /** Suffix of the balancer pool URL required to access the balancer pool status page (for example V(balancer_vhost[:port]/balancer_url_suffix)). */
  balancer_url_suffix?: string;
  /** (IPv4|IPv6|FQDN):port of the Apache httpd 2.4 mod_proxy balancer pool. */
  balancer_vhost: string;
  /** (IPv4|IPv6|FQDN) of the balancer member to get or to set attributes to. Port number is autodetected and should not be specified here. */
  member_host?: string;
  /** Desired state of the member host. */
  state?: "present" | "absent" | "enabled" | "disabled" | "drained" | "hot_standby" | "ignore_errors";
  /** Use https to access balancer management page. */
  tls?: boolean;
  /** Validate ssl/tls certificates. */
  validate_certs?: boolean;
}

export interface Apache2ModProxyReturn {
  /** Specific balancer member information dictionary, returned when the module is invoked with O(member_host) parameter. */
  member?: Record<string, unknown>;
  /** List of member (defined above) dictionaries, returned when the module is invoked with no O(member_host) and O(state) args. */
  members?: string | string[];
}

export const apache2_mod_proxy = defineModule<Apache2ModProxyArgs, Apache2ModProxyReturn>("community.general.apache2_mod_proxy");
