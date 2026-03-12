// Auto-generated from: community.general.consul_agent_check
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ConsulAgentCheckArgs {
  /** Specifies command arguments to run to update the status of the check. */
  args?: string | string[];
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** Checks can be registered with an HTTP endpoint. This means that Consul checks that the HTTP endpoint returns a successful HTTP status. */
  http?: string;
  /** Specifies a unique ID for this check on the node. This defaults to the O(name) parameter, but it may be necessary to provide an ID for uniqueness. This value is returned in the response as V(CheckId). */
  id?: string;
  /** The interval at which the service check is run. This is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  interval?: string;
  /** Required name for the service check. */
  name?: string;
  /** Notes to attach to check when registering it. */
  notes?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** The ID for the service, must be unique per node. If O(state=absent), defaults to the service name if supplied. */
  service_id?: string;
  /** Whether the check should be present or absent. */
  state?: "present" | "absent";
  /** Checks can be registered with a TCP port. This means that Consul will check if the connection attempt to that port is successful (that is, the port is currently accepting connections). The format is V(host:port), for example V(localhost:80). */
  tcp?: string;
  /** A custom HTTP check timeout. The Consul default is 10 seconds. Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  timeout?: string;
  /** The token to use for authorization. */
  token?: string;
  /** Checks can be registered with a TTL instead of a O(args) and O(interval) this means that the service checks in with the agent before the TTL expires. If it does not the check is considered failed. Required if registering a check and the script an interval are missing Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  ttl?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulAgentCheckReturn {
  /** The check as returned by the Consul HTTP API. */
  check?: Record<string, unknown>;
  /** The operation performed. */
  operation?: string;
}

export const consul_agent_check = defineModule<ConsulAgentCheckArgs, ConsulAgentCheckReturn>("community.general.consul_agent_check");
