// Auto-generated from: community.general.nomad_job
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface NomadJobArgs {
  /** Path of certificate for TLS/SSL. */
  client_cert?: string;
  /** Path of certificate's private key for TLS/SSL. */
  client_key?: string;
  /** Content of Nomad job. */
  content?: string;
  /** Type of content of Nomad job. */
  content_format?: "hcl" | "json";
  /** Force job to started. */
  force_start?: boolean;
  /** FQDN of Nomad server. */
  host: string;
  /** Name of job for delete, stop and start job without source. */
  name?: string;
  /** Namespace for Nomad. */
  namespace?: string;
  /** Port of Nomad server. */
  port?: number;
  /** Deploy or remove job. */
  state: "present" | "absent";
  /** Timeout (in seconds) for the request to Nomad. */
  timeout?: number;
  /** ACL token for authentication. */
  token?: string;
  /** Use TLS/SSL connection. */
  use_ssl?: boolean;
  /** Enable TLS/SSL certificate validation. */
  validate_certs?: boolean;
}

export type NomadJobReturn = Record<string, unknown>;

export const nomad_job = defineModule<NomadJobArgs, NomadJobReturn>("community.general.nomad_job");
