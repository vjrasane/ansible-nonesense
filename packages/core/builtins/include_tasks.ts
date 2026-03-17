// Auto-generated from: ansible.builtin.include_tasks
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IncludeTasksArgs {
  /** Accepts a hash of task keywords (for example C(tags), C(become)) that will be applied to the tasks within the include. */
  apply?: string;
  /** Specifies the name of the file that lists tasks to add to the current playbook. */
  file?: string;
  /** Specifies the name of the imported file directly without any other option C(- include_tasks: file.yml).
 */
  "free-form"?: string;
}

export type IncludeTasksReturn = Record<string, unknown>;

export const include_tasks = defineModule<IncludeTasksArgs, IncludeTasksReturn>("ansible.builtin.include_tasks");
