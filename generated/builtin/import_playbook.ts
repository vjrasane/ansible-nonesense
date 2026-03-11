// Auto-generated from: ansible.builtin.import_playbook
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ImportPlaybookArgs {
  /** The name of the imported playbook is specified directly without any other option. */
  "free-form"?: string;
}

export type ImportPlaybookReturn = Record<string, unknown>;

export const import_playbook = defineModule<ImportPlaybookArgs, ImportPlaybookReturn>("ansible.builtin.import_playbook");
