// Auto-generated from: ansible.builtin.ping
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PingArgs {
  /** Data to return for the RV(ping) return value. */
  data?: string;
}

export interface PingReturn {
  /** Value provided with the O(data) parameter. */
  ping?: string;
}

export const ping = defineModule<PingArgs, PingReturn>("ansible.builtin.ping");
