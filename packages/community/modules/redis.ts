// Auto-generated from: community.general.redis
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RedisArgs {
  /** Path to root certificates file. If not set and O(tls) is set to V(true), certifi's CA certificates are used. */
  ca_certs?: string;
  /** Path to the client certificate file. */
  client_cert_file?: string;
  /** Path to the client private key file. */
  client_key_file?: string;
  /** The selected redis command. */
  command?: "config" | "flush" | "replica" | "slave";
  /** The database to flush (used in DB mode) [flush command]. */
  db?: number;
  /** Type of flush (all the DBs in a redis instance or a specific one) [flush command]. */
  flush_mode?: "all" | "db";
  /** Specify the target host running the database. */
  login_host?: string;
  /** Specify the password to authenticate with. */
  login_password?: string;
  /** Specify the port to connect to. */
  login_port?: number;
  /** Specify the user to authenticate with. */
  login_user?: string;
  /** The host of the master instance [replica command]. */
  master_host?: string;
  /** The port of the master instance [replica command]. */
  master_port?: number;
  /** A redis config key. */
  name?: string;
  /** The mode of the redis instance [replica command]. */
  replica_mode?: "master" | "replica" | "slave";
  /** Specify whether or not to use TLS for the connection. */
  tls?: boolean;
  /** Specify whether or not to validate TLS certificates. */
  validate_certs?: boolean;
  /** A redis config value. When memory size is needed, it is possible to specify it in the usual form of 1KB, 2M, 400MB where the base is 1024. Units are case insensitive, in other words 1m = 1mb = 1M = 1MB. */
  value?: string;
}

export type RedisReturn = Record<string, unknown>;

export const redis = defineModule<RedisArgs, RedisReturn>("community.general.redis");
