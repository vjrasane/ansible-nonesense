// Auto-generated from: ansible.builtin.set_fact
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SetFactArgs {
  /** This boolean converts the variable into an actual 'fact' which will also be added to the fact cache. It does not enable fact caching across runs, it just means it will work with it if already enabled. */
  cacheable?: boolean;
  /** The M(ansible.builtin.set_fact) module takes C(key=value) pairs or C(key: value) (YAML notation) as variables to set in the playbook scope. The 'key' is the resulting variable name and the value is, of course, the value of said variable. */
  key_value: string;
}

export type SetFactReturn = Record<string, unknown>;

export const set_fact = defineModule<SetFactArgs, SetFactReturn>("ansible.builtin.set_fact");
