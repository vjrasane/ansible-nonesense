// Auto-generated from: community.general.nomad_job_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NomadJobInfoArgs {
  /** Path of certificate for TLS/SSL. */
  client_cert?: string;
  /** Path of certificate's private key for TLS/SSL. */
  client_key?: string;
  /** FQDN of Nomad server. */
  host: string;
  /** Name of job for Get info. */
  name?: string;
  /** Namespace for Nomad. */
  namespace?: string;
  /** Port of Nomad server. */
  port?: number;
  /** Timeout (in seconds) for the request to Nomad. */
  timeout?: number;
  /** ACL token for authentication. */
  token?: string;
  /** Use TLS/SSL connection. */
  use_ssl?: boolean;
  /** Enable TLS/SSL certificate validation. */
  validate_certs?: boolean;
}

export interface NomadJobInfoReturn {
  /** List with dictionary contains jobs info. */
  result?: string | string[];
}

export const nomad_job_info = defineModule<NomadJobInfoArgs, NomadJobInfoReturn>("community.general.nomad_job_info");
