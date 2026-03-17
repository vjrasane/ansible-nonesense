// Auto-generated from: community.general.influxdb_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface InfluxdbUserArgs {
  /** Whether the user should be in the admin role or not. */
  admin?: boolean;
  /** Privileges to grant to this user. */
  grants?: Record<string, unknown> | Record<string, unknown>[];
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
  /** State of the user. */
  state?: "absent" | "present";
  /** Number of seconds Requests waits for client to establish a connection. */
  timeout?: number;
  /** UDP port to connect to InfluxDB server. */
  udp_port?: number;
  /** Use UDP to connect to InfluxDB server. */
  use_udp?: boolean;
  /** Name of the user. */
  user_name: string;
  /** Password to be set for the user. */
  user_password?: string;
  /** Username that is used to authenticate against InfluxDB server. */
  username?: string;
  /** If set to V(false), the SSL certificates are not validated. */
  validate_certs?: boolean;
}

export type InfluxdbUserReturn = Record<string, unknown>;

export const influxdb_user = defineModule<InfluxdbUserArgs, InfluxdbUserReturn>("community.general.influxdb_user");
