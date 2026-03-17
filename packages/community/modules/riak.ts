// Auto-generated from: community.general.riak
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RiakArgs {
  /** The command you would like to perform against the cluster. */
  command?: "ping" | "kv_test" | "join" | "plan" | "commit";
  /** The path to the riak configuration directory. */
  config_dir?: string;
  /** The IP address and port that is listening for Riak HTTP queries. */
  http_conn?: string;
  /** The target node for certain operations (join, ping). */
  target_node?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** Number of seconds to wait for handoffs to complete. */
  wait_for_handoffs?: number;
  /** Number of seconds to wait for all nodes to agree on the ring. */
  wait_for_ring?: number;
  /** Waits for a riak service to come online before continuing. */
  wait_for_service?: "kv";
}

export type RiakReturn = Record<string, unknown>;

export const riak = defineModule<RiakArgs, RiakReturn>("community.general.riak");
