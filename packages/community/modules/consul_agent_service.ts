// Auto-generated from: community.general.consul_agent_service
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulAgentServiceArgs {
  /** The address to advertise that the service listens on. This value is passed as the C(address) parameter to Consul's C(/v1/agent/service/register) API method, so refer to the Consul API documentation for further details. */
  address?: string;
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Specifies to disable the anti-entropy feature for this service's tags. If C(EnableTagOverride) is set to true then external agents can update this service in the catalog and modify the tags. */
  enable_tag_override?: boolean;
  /** Host of the Consul agent. */
  host?: string;
  /** Specifies a unique ID for this service. This must be unique per agent. This defaults to the O(name) parameter if not provided. If O(state=absent), defaults to the service name if supplied. */
  id?: string;
  /** Optional meta data used for filtering. For keys, the characters C(A-Z), C(a-z), C(0-9), C(_), C(-) are allowed. Not allowed characters are replaced with underscores. */
  meta?: Record<string, unknown>;
  /** Unique name for the service on a node, must be unique per node, required if registering a service. */
  name?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. Defaults to V(http) and can be set to V(https) for secure connections. */
  scheme?: string;
  /** The port on which the service is listening. Can optionally be supplied for registration of a service, that is if O(name) or O(id) is set. */
  service_port?: number;
  /** Whether the service should be present or absent. */
  state?: "present" | "absent";
  /** Tags that are attached to the service registration. */
  tags?: string | string[];
  /** The token to use for authorization. */
  token?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
  /** Specifies weights for the service. */
  weights?: {
    passing?: number;
    warning?: number;
  };
}

export interface ConsulAgentServiceReturn {
  /** The operation performed. */
  operation?: string;
  /** The service as returned by the Consul HTTP API. */
  service?: Record<string, unknown>;
}

export const consul_agent_service = defineModule<ConsulAgentServiceArgs, ConsulAgentServiceReturn>("community.general.consul_agent_service");
