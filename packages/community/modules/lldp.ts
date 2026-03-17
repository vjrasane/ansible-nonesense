// Auto-generated from: community.general.lldp
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LldpArgs {
  /** If lldpctl outputs an attribute multiple time represent all values as a list. */
  multivalues?: boolean;
}

export type LldpReturn = Record<string, unknown>;

export const lldp = defineModule<LldpArgs, LldpReturn>("community.general.lldp");
