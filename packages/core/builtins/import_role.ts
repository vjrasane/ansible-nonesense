// Auto-generated from: ansible.builtin.import_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ImportRoleArgs {
  /** Overrides the role's metadata setting to allow using a role more than once with the same parameters. */
  allow_duplicates?: boolean;
  /** File to load from a role's C(defaults/) directory. */
  defaults_from?: string;
  /** File to load from a role's C(handlers/) directory. */
  handlers_from?: string;
  /** The name of the role to be executed. */
  name: string;
  /** This option dictates whether the role's C(vars) and C(defaults) are exposed to the play. */
  public?: boolean;
  /** Perform role argument spec validation if an argument spec is defined. */
  rolespec_validate?: boolean;
  /** File to load from a role's C(tasks/) directory. */
  tasks_from?: string;
  /** File to load from a role's C(vars/) directory. */
  vars_from?: string;
}

export type ImportRoleReturn = Record<string, unknown>;

export const import_role = defineModule<ImportRoleArgs, ImportRoleReturn>("ansible.builtin.import_role");
