// Auto-generated from: community.general.ejabberd_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface EjabberdUserArgs {
  /** The ejabberd host associated with this username. */
  host: string;
  /** The password to assign to the username. */
  password?: string;
  /** Describe the desired state of the user to be managed. */
  state?: "present" | "absent";
  /** The name of the user to manage. */
  username: string;
}

export type EjabberdUserReturn = Record<string, unknown>;

export const ejabberd_user = defineModule<EjabberdUserArgs, EjabberdUserReturn>("community.general.ejabberd_user");
