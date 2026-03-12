// Auto-generated from: community.general.atomic_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AtomicHostArgs {
  /** The version number of the atomic host to be deployed. */
  revision?: string;
}

export interface AtomicHostReturn {
  /** The command standard output. */
  msg?: string;
}

export const atomic_host = defineModule<AtomicHostArgs, AtomicHostReturn>("community.general.atomic_host");
