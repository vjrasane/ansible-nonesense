// Auto-generated from: ansible.builtin.fail
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface FailArgs {
  /** The customized message used for failing execution. */
  msg?: string;
}

export type FailReturn = Record<string, unknown>;

export const fail = defineModule<FailArgs, FailReturn>("ansible.builtin.fail");
