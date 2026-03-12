// Auto-generated from: community.general.consul_session
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ConsulSessionArgs {
  /** The optional behavior that can be attached to the session when it is created. This controls the behavior when a session is invalidated. */
  behavior?: "delete" | "release";
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Checks that are used to verify the session health. If all the checks fail, the session is invalidated and any locks associated with the session are released and can be acquired once the associated lock delay has expired. */
  checks?: string | string[];
  /** The name of the datacenter in which the session exists or should be created. */
  datacenter?: string;
  /** The optional lock delay that can be attached to the session when it is created. Locks for invalidated sessions ar blocked from being acquired until this delay has expired. Durations are in seconds. */
  delay?: number;
  /** Host of the Consul agent. */
  host?: string;
  /** ID of the session, required when O(state) is either V(info) or V(remove). */
  id?: string;
  /** The name that should be associated with the session. Required when O(state=node) is used. */
  name?: string;
  /** The name of the node that with which the session is associated. By default this is the name of the agent. */
  node?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** Whether the session should be present, in other words it should be created if it does not exist, or absent, removed if present. If created, the O(id) for the session is returned in the output. If V(absent), O(id) is required to remove the session. Info for a single session, all the sessions for a node or all available sessions can be retrieved by specifying V(info), V(node) or V(list) for the O(state); for V(node) or V(info), the node O(name) or session O(id) is required as parameter. */
  state?: "absent" | "info" | "list" | "node" | "present";
  /** The token to use for authorization. */
  token?: string;
  /** Specifies the duration of a session in seconds (between 10 and 86400). */
  ttl?: number;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export type ConsulSessionReturn = Record<string, unknown>;

export const consul_session = defineModule<ConsulSessionArgs, ConsulSessionReturn>("community.general.consul_session");
