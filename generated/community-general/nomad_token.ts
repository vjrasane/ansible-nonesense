// Auto-generated from: community.general.nomad_token
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface NomadTokenArgs {
  /** Path of certificate for TLS/SSL. */
  client_cert?: string;
  /** Path of certificate's private key for TLS/SSL. */
  client_key?: string;
  /** Indicates whether or not the token was created with the C(--global). */
  global_replicated?: boolean;
  /** FQDN of Nomad server. */
  host: string;
  /** Name of ACL token to create. */
  name?: string;
  /** Namespace for Nomad. */
  namespace?: string;
  /** A list of the policies assigned to the token. */
  policies?: string | string[];
  /** Port of Nomad server. */
  port?: number;
  /** Create or remove ACL token. */
  state: "present" | "absent";
  /** Timeout (in seconds) for the request to Nomad. */
  timeout?: number;
  /** ACL token for authentication. */
  token?: string;
  /** The type of the token can be V(client), V(management), or V(bootstrap). */
  token_type?: "client" | "management" | "bootstrap";
  /** Use TLS/SSL connection. */
  use_ssl?: boolean;
  /** Enable TLS/SSL certificate validation. */
  validate_certs?: boolean;
}

export interface NomadTokenReturn {
  /** Result returned by nomad. */
  result?: Record<string, unknown>;
}

export const nomad_token = defineModule<NomadTokenArgs, NomadTokenReturn>("community.general.nomad_token");
