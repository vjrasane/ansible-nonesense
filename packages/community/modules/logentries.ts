// Auto-generated from: community.general.logentries
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LogentriesArgs {
  /** Type of the log. */
  logtype?: string;
  /** Name of the log. */
  name?: string;
  /** Path to a log file. */
  path: string;
  /** Following state of the log. */
  state?: "present" | "absent" | "followed" | "unfollowed";
}

export type LogentriesReturn = Record<string, unknown>;

export const logentries = defineModule<LogentriesArgs, LogentriesReturn>("community.general.logentries");
