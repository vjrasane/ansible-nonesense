// Auto-generated from: community.general.mssql_script
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MssqlScriptArgs {
  /** Host running the database. */
  login_host: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** Port of the MSSQL server. Requires O(login_host) be defined as well. */
  login_port?: number;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Database to run script against. */
  name?: string;
  /** With V(default) each row is returned as a list of values. See RV(query_results). */
  output?: "dict" | "default";
  /** Parameters passed to the script as SQL parameters.
(Query V('SELECT %(name\)s"') with V(example: '{"name": "John Doe"}).)'. */
  params?: Record<string, unknown>;
  /** The SQL script to be executed. */
  script: string;
  /** If transactional mode is requested, start a transaction and commit the change only if the script succeed. Otherwise, rollback the transaction. */
  transaction?: boolean;
}

export interface MssqlScriptReturn {
  /** List of batches (queries separated by V(GO) keyword). */
  query_results?: unknown[] | unknown[][];
  /** List of batches (queries separated by V(GO) keyword). */
  query_results_dict?: unknown[] | unknown[][];
}

export const mssql_script = defineModule<MssqlScriptArgs, MssqlScriptReturn>("community.general.mssql_script");
