// Auto-generated from: community.general.redis_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RedisInfoArgs {
  /** Path to root certificates file. If not set and O(tls) is set to V(true), certifi's CA certificates are used. */
  ca_certs?: string;
  /** Path to the client certificate file. */
  client_cert_file?: string;
  /** Path to the client private key file. */
  client_key_file?: string;
  /** Get informations about cluster status as RV(cluster). */
  cluster?: boolean;
  /** Specify the target host running the database. */
  login_host?: string;
  /** Specify the password to authenticate with. */
  login_password?: string;
  /** Specify the port to connect to. */
  login_port?: number;
  /** Specify the user to authenticate with. */
  login_user?: string;
  /** Specify whether or not to use TLS for the connection. */
  tls?: boolean;
  /** Specify whether or not to validate TLS certificates. */
  validate_certs?: boolean;
}

export interface RedisInfoReturn {
  /** The default set of cluster information sections U(https://redis.io/commands/cluster-info). */
  cluster?: Record<string, unknown>;
  /** The default set of server information sections U(https://redis.io/commands/info). */
  info?: Record<string, unknown>;
}

export const redis_info = defineModule<RedisInfoArgs, RedisInfoReturn>("community.general.redis_info");
