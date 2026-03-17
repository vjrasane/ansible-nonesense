// Auto-generated from: ansible.builtin.getent
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GetentArgs {
  /** The name of a getent database supported by the target system (passwd, group, hosts, etc). */
  database: string;
  /** If a supplied key is missing this will make the task fail if V(true). */
  fail_key?: boolean;
  /** Key from which to return values from the specified database, otherwise the full contents are returned. */
  key?: string;
  /** Override all databases with the specified service */
  service?: string;
  /** Character used to split the database values into lists/arrays such as V(:) or V(\\t), otherwise it will try to pick one depending on the database. */
  split?: string;
}

export interface GetentReturn {
  /** Facts to add to ansible_facts. */
  ansible_facts?: Record<string, unknown>;
}

export const getent = defineModule<GetentArgs, GetentReturn>("ansible.builtin.getent");
