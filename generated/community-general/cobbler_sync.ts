// Auto-generated from: community.general.cobbler_sync
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CobblerSyncArgs {
  /** The name or IP address of the Cobbler system. */
  host?: string;
  /** The password to log in to Cobbler. */
  password?: string;
  /** Port number to be used for REST connection. */
  port?: number;
  /** If V(false), an HTTP connection is used instead of the default HTTPS connection. */
  use_ssl?: boolean;
  /** The username to log in to Cobbler. */
  username?: string;
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
}

export type CobblerSyncReturn = Record<string, unknown>;

export const cobbler_sync = defineModule<CobblerSyncArgs, CobblerSyncReturn>("community.general.cobbler_sync");
