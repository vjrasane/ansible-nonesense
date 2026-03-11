// Auto-generated from: ansible.builtin.group_by
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GroupByArgs {
  /** The variables whose values will be used as groups. */
  key: string;
  /** The list of the parent groups. */
  parents?: string | string[];
}

export type GroupByReturn = Record<string, unknown>;

export const group_by = defineModule<GroupByArgs, GroupByReturn>("ansible.builtin.group_by");
