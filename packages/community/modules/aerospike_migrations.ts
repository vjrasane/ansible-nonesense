// Auto-generated from: community.general.aerospike_migrations
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AerospikeMigrationsArgs {
  /** How long to try to connect before giving up (milliseconds). */
  connect_timeout?: number;
  /** How many times should the cluster report "no migrations" consecutively before returning OK back to ansible? */
  consecutive_good_checks?: number;
  /** Fail if the cluster key changes if something else is changing the cluster, we may want to fail. */
  fail_on_cluster_change?: boolean;
  /** Which host do we use as seed for info connection. */
  host?: string;
  /** Do you wish to only check for migrations on the local node before returning, or do you want all nodes in the cluster to finish before returning? */
  local_only: boolean;
  /** The metric key used to determine if we have rx migrations remaining. Changeable due to backwards compatibility. */
  migrate_rx_key?: string;
  /** The metric key used to determine if we have tx migrations remaining. Changeable due to backwards compatibility. */
  migrate_tx_key?: string;
  /** Check fails until cluster size is met or until tries is exhausted. */
  min_cluster_size?: number;
  /** Which port to connect to Aerospike on (service port). */
  port?: number;
  /** How long to sleep between each check (seconds). */
  sleep_between_checks?: number;
  /** When all aerospike builds in the cluster are greater than version 4.3, then the C(cluster-stable) info command is used. Inside this command, you can optionally specify what the target cluster size is - but it is not necessary. You can still rely on O(min_cluster_size) if you do not want to use this option. */
  target_cluster_size?: number;
  /** How many times do we poll before giving up and failing? */
  tries_limit?: number;
}

export type AerospikeMigrationsReturn = Record<string, unknown>;

export const aerospike_migrations = defineModule<AerospikeMigrationsArgs, AerospikeMigrationsReturn>("community.general.aerospike_migrations");
