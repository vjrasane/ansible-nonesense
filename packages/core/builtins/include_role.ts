// Auto-generated from: ansible.builtin.include_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IncludeRoleArgs {
  /** Overrides the role's metadata setting to allow using a role more than once with the same parameters. */
  allow_duplicates?: boolean;
  /** Accepts a hash of task keywords (for example C(tags), C(become)) that will be applied to all tasks within the included role. */
  apply?: string;
  /** File to load from a role's C(defaults/) directory. */
  defaults_from?: string;
  /** File to load from a role's C(handlers/) directory. */
  handlers_from?: string;
  /** The name of the role to be executed. */
  name: string;
  /** This option dictates whether the role's C(vars) and C(defaults) are exposed to the play. If set to V(true) the variables will be available to tasks following the C(include_role) task. This functionality differs from standard variable exposure for roles listed under the C(roles) header or M(ansible.builtin.import_role) as they are exposed to the play at playbook parsing time, and available to earlier roles and tasks as well. */
  public?: boolean;
  /** Perform role argument spec validation if an argument spec is defined. */
  rolespec_validate?: boolean;
  /** File to load from a role's C(tasks/) directory. */
  tasks_from?: string;
  /** File to load from a role's C(vars/) directory. */
  vars_from?: string;
}

export type IncludeRoleReturn = Record<string, unknown>;

export const include_role = defineModule<IncludeRoleArgs, IncludeRoleReturn>("ansible.builtin.include_role");
