// Auto-generated from: community.general.vertica_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface VerticaUserArgs {
  /** Name of the Vertica cluster. */
  cluster?: string;
  /** Name of the Vertica database. */
  db?: string;
  /** Sets the user's password expiration. */
  expired?: boolean;
  /** Set to V(true) if users are authenticated using LDAP. */
  ldap?: boolean;
  /** The password used to authenticate with. */
  login_password?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** The user's password encrypted by the MD5 algorithm. */
  password?: string;
  /** Vertica cluster port to connect to. */
  port?: string;
  /** Sets the user's profile. */
  profile?: string;
  /** Sets the user's resource pool. */
  resource_pool?: string;
  /** Comma separated list of roles to assign to the user. */
  roles?: string;
  /** Whether to create (V(present)), drop (V(absent)), or lock (V(locked)) a user. */
  state?: "present" | "absent" | "locked";
  /** Name of the user to add or remove. */
  user: string;
}

export type VerticaUserReturn = Record<string, unknown>;

export const vertica_user = defineModule<VerticaUserArgs, VerticaUserReturn>("community.general.vertica_user");
