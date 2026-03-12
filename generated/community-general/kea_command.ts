// Auto-generated from: community.general.kea_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeaCommandArgs {
  /** The arguments sent along with the command, if any. */
  arguments?: Record<string, unknown>;
  /** The name of the command to send, for example V(status-get). */
  command: string;
  /** A list of C(result) codes to indicate success and changed system state. */
  rv_changed?: number | number[];
  /** A list of C(result) codes to indicate success but unchanged system state. */
  rv_unchanged?: number | number[];
  /** The full pathname of the Unix Domain Socket to connect to. */
  socket?: string;
}

export interface KeaCommandReturn {
  /** The server JSON response. */
  response?: Record<string, unknown>;
}

export const kea_command = defineModule<KeaCommandArgs, KeaCommandReturn>("community.general.kea_command");
