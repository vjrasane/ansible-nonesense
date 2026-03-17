// Auto-generated from: community.general.redis_data
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RedisDataArgs {
  /** Path to root certificates file. If not set and O(tls) is set to V(true), certifi's CA certificates are used. */
  ca_certs?: string;
  /** Path to the client certificate file. */
  client_cert_file?: string;
  /** Path to the client private key file. */
  client_key_file?: string;
  /** Only set key if it already exists. */
  existing?: boolean;
  /** Expiration time in milliseconds. Setting this option always results in a change in the database. */
  expiration?: number;
  /** Retain the time to live associated with the key. */
  keep_ttl?: boolean;
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
  /** Only set key if it does not already exist. */
  non_existing?: boolean;
  /** State of the key. */
  state?: "present" | "absent";
  /** Specify whether or not to use TLS for the connection. */
  tls?: boolean;
  /** Specify whether or not to validate TLS certificates. */
  validate_certs?: boolean;
  /** Value that key should be set to. */
  value?: string;
}

export interface RedisDataReturn {
  /** A short message. */
  msg?: string;
  /** Value of key before setting. */
  old_value?: string;
  /** Value key was set to. */
  value?: string;
}

export const redis_data = defineModule<RedisDataArgs, RedisDataReturn>("community.general.redis_data");
