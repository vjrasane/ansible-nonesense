// Auto-generated from: community.general.vertica_schema
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VerticaSchemaArgs {
  /** Name of the Vertica cluster. */
  cluster?: string;
  /** Comma separated list of roles to create and grant usage and create access to the schema. */
  create_roles?: string;
  /** Name of the Vertica database. */
  db?: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Name of the user to set as owner of the schema. */
  owner?: string;
  /** Vertica cluster port to connect to. */
  port?: string;
  /** Name of the schema to add or remove. */
  schema: string;
  /** Whether to create V(present), or drop V(absent) a schema. */
  state?: "present" | "absent";
  /** Comma separated list of roles to create and grant usage access to the schema. */
  usage_roles?: string;
}

export type VerticaSchemaReturn = Record<string, unknown>;

export const vertica_schema = defineModule<VerticaSchemaArgs, VerticaSchemaReturn>("community.general.vertica_schema");
