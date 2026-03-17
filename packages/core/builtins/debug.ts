// Auto-generated from: ansible.builtin.debug
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DebugArgs {
  /** The customized message that is printed. If omitted, prints a generic message. */
  msg?: string;
  /** A variable name to debug. */
  var?: string;
  /** A number that controls when the debug is run, if you set to 3 it will only run debug when -vvv or above. */
  verbosity?: number;
}

export type DebugReturn = Record<string, unknown>;

export const debug = defineModule<DebugArgs, DebugReturn>("ansible.builtin.debug");
