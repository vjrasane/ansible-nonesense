// Auto-generated from: community.general.facter_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface FacterFactsArgs {
  /** Specifies arguments for facter. */
  arguments?: string | string[];
}

export interface FacterFactsReturn {
  /** Dictionary with one key C(facter). */
  ansible_facts?: Record<string, unknown>;
}

export const facter_facts = defineModule<FacterFactsArgs, FacterFactsReturn>("community.general.facter_facts");
