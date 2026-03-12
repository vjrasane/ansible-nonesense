// Auto-generated from: community.general.sensu_client
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SensuClientArgs {
  /** An address to help identify and reach the client. This is only informational, usually an IP address or hostname. */
  address?: string;
  /** The chef definition scope, used to configure the Sensu Enterprise Chef integration (Sensu Enterprise users only). */
  chef?: Record<string, unknown>;
  /** If a deregistration event should be created upon Sensu client process stop. */
  deregister?: boolean;
  /** The deregistration definition scope, used to configure automated Sensu client de-registration. */
  deregistration?: Record<string, unknown>;
  /** The ec2 definition scope, used to configure the Sensu Enterprise AWS EC2 integration (Sensu Enterprise users only). */
  ec2?: Record<string, unknown>;
  /** The keepalive definition scope, used to configure Sensu client keepalives behavior (for example keepalive thresholds and so). */
  keepalive?: Record<string, unknown>;
  /** If Sensu should monitor keepalives for this client. */
  keepalives?: boolean;
  /** A unique name for the client. The name cannot contain special characters or spaces. */
  name?: string;
  /** The puppet definition scope, used to configure the Sensu Enterprise Puppet integration (Sensu Enterprise users only). */
  puppet?: Record<string, unknown>;
  /** Client definition attributes to redact (values) when logging and sending client keepalives. */
  redact?: string | string[];
  /** The registration definition scope, used to configure Sensu registration event handlers. */
  registration?: Record<string, unknown>;
  /** If safe mode is enabled for the client. Safe mode requires local check definitions in order to accept a check request and execute the check. */
  safe_mode?: boolean;
  /** The servicenow definition scope, used to configure the Sensu Enterprise ServiceNow integration (Sensu Enterprise users only). */
  servicenow?: Record<string, unknown>;
  /** The socket definition scope, used to configure the Sensu client socket. */
  socket?: Record<string, unknown>;
  /** Whether the client should be present or not. */
  state?: "present" | "absent";
  /** An array of client subscriptions, a list of roles and/or responsibilities assigned to the system (for example V(webserver)). */
  subscriptions?: string | string[];
}

export interface SensuClientReturn {
  /** Effective client configuration, when state is present. */
  config?: Record<string, unknown>;
  /** Path to the client configuration file. */
  file?: string;
}

export const sensu_client = defineModule<SensuClientArgs, SensuClientReturn>("community.general.sensu_client");
