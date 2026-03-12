// Auto-generated from: community.general.utm_aaa_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UtmAaaGroupArgs {
  /** List of adirectory group strings. */
  adirectory_groups?: string | string[];
  /** Dictionary of group sids. */
  adirectory_groups_sids?: Record<string, unknown>;
  /** The backend for the group. */
  backend_match?: "none" | "adirectory" | "edirectory" | "radius" | "tacacs" | "ldap";
  /** Comment that describes the AAA group. */
  comment?: string;
  /** Group type. Is static if none is selected. */
  dynamic?: "none" | "ipsec_dn" | "directory_groups";
  /** List of edirectory group strings. */
  edirectory_groups?: string | string[];
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** The ipsec dn string. */
  ipsec_dn?: string;
  /** The ldap attribute to check against. */
  ldap_attribute?: string;
  /** The ldap attribute value to check against. */
  ldap_attribute_value?: string;
  /** A list of user ref names (aaa/user). */
  members?: string | string[];
  /** The name of the object that identifies the entry. */
  name: string;
  /** The network reference name. The objects contains the known IP addresses for the authentication object (network/aaa). */
  network?: string;
  /** A list of radius group strings. */
  radius_groups?: string | string[];
  /** The desired state of the object. */
  state?: "absent" | "present";
  /** A list of tacacs group strings. */
  tacacs_groups?: string | string[];
  /** The REST Endpoint of the Sophos UTM. */
  utm_host: string;
  /** The port of the REST interface. */
  utm_port?: number;
  /** The protocol of the REST Endpoint. */
  utm_protocol?: "http" | "https";
  /** The token used to identify at the REST-API. */
  utm_token: string;
  /** Whether the REST interface's SSL certificate should be verified or not. */
  validate_certs?: boolean;
}

export interface UtmAaaGroupReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_aaa_group = defineModule<UtmAaaGroupArgs, UtmAaaGroupReturn>("community.general.utm_aaa_group");
