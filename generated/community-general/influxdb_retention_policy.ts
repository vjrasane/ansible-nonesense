// Auto-generated from: community.general.influxdb_retention_policy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface InfluxdbRetentionPolicyArgs {
  /** Name of the database. */
  database_name: string;
  /** Sets the retention policy as default retention policy. */
  default?: boolean;
  /** Determines how long InfluxDB should keep the data. If specified, it should be V(INF) or at least one hour. If not specified, V(INF) is assumed. Supports complex duration expressions with multiple units. */
  duration?: string;
  /** The hostname or IP address on which InfluxDB server is listening. */
  hostname?: string;
  /** Password that is used to authenticate against InfluxDB server. */
  password?: string;
  /** The path on which InfluxDB server is accessible. */
  path?: string;
  /** Name of the retention policy. */
  policy_name: string;
  /** The port on which InfluxDB server is listening. */
  port?: number;
  /** HTTP(S) proxy to use for Requests to connect to InfluxDB server. */
  proxies?: Record<string, unknown>;
  /** Determines how many independent copies of each point are stored in the cluster. */
  replication?: number;
  /** Number of retries client performs before aborting. */
  retries?: number;
  /** Determines the time range covered by a shard group. If specified it must be at least one hour. If not provided, it is determined by InfluxDB by the rentention policy's duration. Supports complex duration expressions with multiple units. */
  shard_group_duration?: string;
  /** Use https instead of http to connect to InfluxDB server. */
  ssl?: boolean;
  /** State of the retention policy. */
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

export type InfluxdbRetentionPolicyReturn = Record<string, unknown>;

export const influxdb_retention_policy = defineModule<InfluxdbRetentionPolicyArgs, InfluxdbRetentionPolicyReturn>("community.general.influxdb_retention_policy");
