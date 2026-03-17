// Auto-generated from: community.general.manageiq_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ManageiqUserArgs {
  /** The users' E-mail address. */
  email?: string;
  /** The name of the group to which the user belongs. */
  group?: string;
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The users' full name. */
  name?: string;
  /** The users' password. */
  password?: string;
  /** V(absent) - user should not exist, */
  state?: "absent" | "present";
  /** V(always) updates passwords unconditionally. */
  update_password?: "always" | "on_create";
  /** The unique userid in manageiq, often mentioned as username. */
  userid: string;
}

export type ManageiqUserReturn = Record<string, unknown>;

export const manageiq_user = defineModule<ManageiqUserArgs, ManageiqUserReturn>("community.general.manageiq_user");
