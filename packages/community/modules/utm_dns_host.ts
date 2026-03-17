// Auto-generated from: community.general.utm_dns_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UtmDnsHostArgs {
  /** The IPV4 Address of the entry. Can be left empty for automatic resolving. */
  address?: string;
  /** The IPV6 Address of the entry. Can be left empty for automatic resolving. */
  address6?: string;
  /** An optional comment to add to the DNS host object. */
  comment?: string;
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** The hostname for the DNS host object. */
  hostname?: string;
  /** The reference name of the interface to use. If not provided the default interface is used. */
  interface?: string;
  /** The name of the object that identifies the entry. */
  name: string;
  /** Whether the hostname's ipv4 address is already resolved or not. */
  resolved?: boolean;
  /** Whether the hostname's ipv6 address is already resolved or not. */
  resolved6?: boolean;
  /** The desired state of the object. */
  state?: "absent" | "present";
  /** The timeout for the UTM to resolve the IP address for the hostname again. */
  timeout?: number;
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

export interface UtmDnsHostReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_dns_host = defineModule<UtmDnsHostArgs, UtmDnsHostReturn>("community.general.utm_dns_host");
