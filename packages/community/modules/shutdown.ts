// Auto-generated from: community.general.shutdown
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ShutdownArgs {
  /** Seconds to wait before shutdown. Passed as a parameter to the shutdown command. */
  delay?: number;
  /** Message to display to users before shutdown. */
  msg?: string;
  /** Paths to search on the remote machine for the C(shutdown) command. */
  search_paths?: string | string[];
}

export interface ShutdownReturn {
  /** V(true) if the machine has been shut down. */
  shutdown?: boolean;
}

export const shutdown = defineModule<ShutdownArgs, ShutdownReturn>("community.general.shutdown");
