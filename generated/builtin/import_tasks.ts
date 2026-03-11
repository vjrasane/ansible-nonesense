// Auto-generated from: ansible.builtin.import_tasks
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ImportTasksArgs {
  /** Specifies the name of the file that lists tasks to add to the current playbook. */
  file?: string;
  /** Specifies the name of the imported file directly without any other option C(- import_tasks: file.yml).
 */
  "free-form"?: string;
}

export type ImportTasksReturn = Record<string, unknown>;

export const import_tasks = defineModule<ImportTasksArgs, ImportTasksReturn>("ansible.builtin.import_tasks");
