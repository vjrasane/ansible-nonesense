// Auto-generated from: community.general.utm_ca_host_key_cert
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UtmCaHostKeyCertArgs {
  /** A reference to an existing utm_ca_signing_ca or utm_ca_verification_ca object. */
  ca: string;
  /** The certificate in PEM format. */
  certificate: string;
  /** Optional comment string. */
  comment?: string;
  /** Optionally enable encryption. */
  encrypted?: boolean;
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** Optional private key in PEM format. */
  key?: string;
  /** A reference to an existing utm_ca_meta_x509 object. */
  meta: string;
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

export interface UtmCaHostKeyCertReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_ca_host_key_cert = defineModule<UtmCaHostKeyCertArgs, UtmCaHostKeyCertReturn>("community.general.utm_ca_host_key_cert");
