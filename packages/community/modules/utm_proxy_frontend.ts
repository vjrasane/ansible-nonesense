// Auto-generated from: community.general.utm_proxy_frontend
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UtmProxyFrontendArgs {
  /** Whether to add the content type header or not. */
  add_content_type_header?: boolean;
  /** The reference name of the network/interface_address object. */
  address?: string;
  /** A list of reference names for the allowed networks. */
  allowed_networks?: string | string[];
  /** The reference name of the ca/host_key_cert object. */
  certificate?: string;
  /** An optional comment to add to the object. */
  comment?: string;
  /** Whether to enable the compression. */
  disable_compression?: boolean;
  /** A list of domain names for the frontend object. */
  domain?: string | string[];
  /** A list of exception ref names (reverse_proxy/exception). */
  exceptions?: string | string[];
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** Whether to enable HTML rewrite or not. */
  htmlrewrite?: boolean;
  /** Whether to enable HTML rewrite cookie or not. */
  htmlrewrite_cookies?: boolean;
  /** Whether to enable implicit redirection or not. */
  implicitredirect?: boolean;
  /** Which loadbalancer method should be used. */
  lbmethod?: "" | "bybusyness" | "bytraffic" | "byrequests";
  /** A list of location ref names (reverse_proxy/location). */
  locations?: string | string[];
  /** The name of the object that identifies the entry. */
  name: string;
  /** The frontend http port. */
  port?: number;
  /** Whether to preserve host header. */
  preservehost?: boolean;
  /** The reference string of the reverse_proxy/profile. */
  profile?: string;
  /** The desired state of the object. */
  state?: "absent" | "present";
  /** Whether to activate the frontend entry or not. */
  status?: boolean;
  /** Which protocol should be used. */
  type?: "http" | "https";
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
  /** Whether to pass the host header or not. */
  xheaders?: boolean;
}

export interface UtmProxyFrontendReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_proxy_frontend = defineModule<UtmProxyFrontendArgs, UtmProxyFrontendReturn>("community.general.utm_proxy_frontend");
