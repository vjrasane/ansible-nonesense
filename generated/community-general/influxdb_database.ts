// Auto-generated from: community.general.influxdb_database
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface InfluxdbDatabaseArgs {
  /** Name of the database. */
  database_name: string;
  /** The hostname or IP address on which InfluxDB server is listening. */
  hostname?: string;
  /** Password that is used to authenticate against InfluxDB server. */
  password?: string;
  /** The path on which InfluxDB server is accessible. */
  path?: string;
  /** The port on which InfluxDB server is listening. */
  port?: number;
  /** HTTP(S) proxy to use for Requests to connect to InfluxDB server. */
  proxies?: Record<string, unknown>;
  /** Number of retries client performs before aborting. */
  retries?: number;
  /** Use https instead of http to connect to InfluxDB server. */
  ssl?: boolean;
  /** Determines if the database should be created or destroyed. */
  state?: "absent" | "present";
  /** Number of seconds Requests waits for client to establish a connection. */
  timeout?: number;
  /** UDP port to connect to InfluxDB server. */
  udp_port?: number;
  /** Use UDP to connect to InfluxDB server. */
  use_udp?: boolean;
  /** Username that is used to authenticate against InfluxDB server. */
  username?: string;
  /** If set to V(false), the SSL certificates are not validated. */
  validate_certs?: boolean;
}

export type InfluxdbDatabaseReturn = Record<string, unknown>;

export const influxdb_database = defineModule<InfluxdbDatabaseArgs, InfluxdbDatabaseReturn>("community.general.influxdb_database");
