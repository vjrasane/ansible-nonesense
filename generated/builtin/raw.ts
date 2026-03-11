// Auto-generated from: ansible.builtin.raw
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RawArgs {
  /** Change the shell used to execute the command. Should be an absolute path to the executable. */
  executable?: string;
  /** The raw module takes a free form command to run. */
  free_form: string;
}

export type RawReturn = Record<string, unknown>;

export const raw = defineModule<RawArgs, RawReturn>("ansible.builtin.raw");
