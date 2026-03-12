// Auto-generated from: community.general.vertica_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VerticaInfoArgs {
  /** Name of the cluster running the schema. */
  cluster?: string;
  /** Name of the database running the schema. */
  db?: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Database port to connect to. */
  port?: string;
}

export type VerticaInfoReturn = Record<string, unknown>;

export const vertica_info = defineModule<VerticaInfoArgs, VerticaInfoReturn>("community.general.vertica_info");
