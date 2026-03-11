// Auto-generated from: ansible.builtin.set_stats
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SetStatsArgs {
  /** Whether the provided value is aggregated to the existing stat V(true) or will replace it V(false). */
  aggregate?: boolean;
  /** A dictionary of which each key represents a stat (or variable) you want to keep track of. */
  data: Record<string, unknown>;
  /** Whether the stats are per host or for all hosts in the run. */
  per_host?: boolean;
}

export type SetStatsReturn = Record<string, unknown>;

export const set_stats = defineModule<SetStatsArgs, SetStatsReturn>("ansible.builtin.set_stats");
