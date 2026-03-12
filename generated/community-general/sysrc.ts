// Auto-generated from: community.general.sysrc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SysrcArgs {
  /** Delimiter to be used instead of V(" ") (space). */
  delim?: string;
  /** Name or ID of the jail to operate on. */
  jail?: string;
  /** Name of variable in C(/etc/rc.conf) to manage. */
  name: string;
  /** Path to file to use instead of V(/etc/rc.conf). */
  path?: string;
  /** Use V(present) to add the variable. */
  state?: "absent" | "present" | "value_present" | "value_absent";
  /** The value to set when O(state=present). */
  value?: string;
}

export type SysrcReturn = Record<string, unknown>;

export const sysrc = defineModule<SysrcArgs, SysrcReturn>("community.general.sysrc");
