// Auto-generated from: community.general.utm_ca_host_key_cert_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UtmCaHostKeyCertInfoArgs {
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** The name of the object that identifies the entry. */
  name: string;
  /** The desired state of the object. */
  state?: "absent" | "present";
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

export interface UtmCaHostKeyCertInfoReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_ca_host_key_cert_info = defineModule<UtmCaHostKeyCertInfoArgs, UtmCaHostKeyCertInfoReturn>("community.general.utm_ca_host_key_cert_info");
