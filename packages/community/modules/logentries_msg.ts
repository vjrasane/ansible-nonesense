// Auto-generated from: community.general.logentries_msg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LogentriesMsgArgs {
  /** API endpoint. */
  api?: string;
  /** The message body. */
  msg: string;
  /** API endpoint port. */
  port?: number;
  /** Log token. */
  token: string;
}

export type LogentriesMsgReturn = Record<string, unknown>;

export const logentries_msg = defineModule<LogentriesMsgArgs, LogentriesMsgReturn>("community.general.logentries_msg");
