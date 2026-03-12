// Auto-generated from: community.general.cobbler_system
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CobblerSystemArgs {
  /** The name or IP address of the Cobbler system. */
  host?: string;
  /** A list of dictionaries containing interface options. */
  interfaces?: Record<string, unknown>;
  /** The system name to manage. */
  name?: string;
  /** The password to log in to Cobbler. */
  password?: string;
  /** Port number to be used for REST connection. */
  port?: number;
  /** A dictionary with system properties. */
  properties?: Record<string, unknown>;
  /** Whether the system should be present, absent or a query is made. */
  state?: "absent" | "present" | "query";
  /** Sync on changes. */
  sync?: boolean;
  /** If V(false), an HTTP connection is used instead of the default HTTPS connection. */
  use_ssl?: boolean;
  /** The username to log in to Cobbler. */
  username?: string;
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface CobblerSystemReturn {
  /** (Resulting) information about the system we are working with. */
  system?: Record<string, unknown>;
  /** List of systems. */
  systems?: string | string[];
}

export const cobbler_system = defineModule<CobblerSystemArgs, CobblerSystemReturn>("community.general.cobbler_system");
