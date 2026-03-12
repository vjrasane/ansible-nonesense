// Auto-generated from: community.general.vertica_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VerticaRoleArgs {
  /** Comma separated list of roles to assign to the role. */
  assigned_roles?: string;
  /** Name of the Vertica cluster. */
  cluster?: string;
  /** Name of the Vertica database. */
  db?: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Vertica cluster port to connect to. */
  port?: string;
  /** Name of the role to add or remove. */
  role: string;
  /** Whether to create V(present), drop V(absent) or lock V(locked) a role. */
  state?: "present" | "absent";
}

export type VerticaRoleReturn = Record<string, unknown>;

export const vertica_role = defineModule<VerticaRoleArgs, VerticaRoleReturn>("community.general.vertica_role");
