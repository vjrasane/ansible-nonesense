// Auto-generated from: ansible.builtin.assert
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AssertArgs {
  /** The customized message used for a failing assertion. */
  fail_msg?: string;
  /** Set this to V(true) to avoid verbose output. */
  quiet?: boolean;
  /** The customized message used for a successful assertion. */
  success_msg?: string;
  /** A list of string expressions of the same form that can be passed to the C(when) statement. */
  that: string | string[];
}

export type AssertReturn = Record<string, unknown>;

export const assert_ = defineModule<AssertArgs, AssertReturn>("ansible.builtin.assert");
