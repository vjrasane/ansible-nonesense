// Auto-generated from: community.general.redis_data_incr
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RedisDataIncrArgs {
  /** Path to root certificates file. If not set and O(tls) is set to V(true), certifi's CA certificates are used. */
  ca_certs?: string;
  /** Path to the client certificate file. */
  client_cert_file?: string;
  /** Path to the client private key file. */
  client_key_file?: string;
  /** Float amount to increment the key by. */
  increment_float?: number;
  /** Integer amount to increment the key by. */
  increment_int?: number;
  /** Database key. */
  key: string;
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

export interface RedisDataIncrReturn {
  /** A short message. */
  msg?: string;
  /** Incremented value of key. */
  value?: number;
}

export const redis_data_incr = defineModule<RedisDataIncrArgs, RedisDataIncrReturn>("community.general.redis_data_incr");
