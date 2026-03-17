// Auto-generated from: ansible.builtin.gather_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GatherFactsArgs {
  /** A toggle that controls if the fact modules are executed in parallel or serially and in order. This can guarantee the merge order of module facts at the expense of performance. */
  parallel?: boolean;
}

export type GatherFactsReturn = Record<string, unknown>;

export const gather_facts = defineModule<GatherFactsArgs, GatherFactsReturn>("ansible.builtin.gather_facts");
