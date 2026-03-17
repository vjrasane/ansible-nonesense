// Auto-generated from: community.general.utm_proxy_location
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UtmProxyLocationArgs {
  /** Whether to activate the access control for the location. */
  access_control?: "0" | "1";
  /** A list of allowed networks. */
  allowed_networks?: string | string[];
  /** The reference name of the auth profile. */
  auth_profile?: string;
  /** A list of backends that are connected with this location declaration. */
  backend?: string | string[];
  /** The path of the backend. */
  be_path?: string;
  /** The optional comment string. */
  comment?: string;
  /** A list of denied network references. */
  denied_networks?: string | string[];
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** Activate hot standby mode. */
  hot_standby?: boolean;
  /** The name of the object that identifies the entry. */
  name: string;
  /** The path of the location. */
  path?: string;
  /** The desired state of the object. */
  state?: "absent" | "present";
  /** Whether the location is active or not. */
  status?: boolean;
  /** The stickysession ID. */
  stickysession_id?: string;
  /** Enable the stickysession. */
  stickysession_status?: boolean;
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
  /** Enable the websocket passthrough. */
  websocket_passthrough?: boolean;
}

export interface UtmProxyLocationReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_proxy_location = defineModule<UtmProxyLocationArgs, UtmProxyLocationReturn>("community.general.utm_proxy_location");
