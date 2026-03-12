// Auto-generated from: community.general.vertica_configuration
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VerticaConfigurationArgs {
  /** Name of the Vertica cluster. */
  cluster?: string;
  /** Name of the Vertica database. */
  db?: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Name of the parameter to update. */
  parameter: string;
  /** Vertica cluster port to connect to. */
  port?: string;
  /** Value of the parameter to be set. */
  value?: string;
}

export type VerticaConfigurationReturn = Record<string, unknown>;

export const vertica_configuration = defineModule<VerticaConfigurationArgs, VerticaConfigurationReturn>("community.general.vertica_configuration");
