// Auto-generated from: community.general.odbc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OdbcArgs {
  /** Perform a commit after the execution of the SQL query. */
  commit?: boolean;
  /** The connection string passed into ODBC. */
  dsn: string;
  /** Parameters to pass to the SQL query. */
  params?: string | string[];
  /** The SQL query to perform. */
  query: string;
}

export interface OdbcReturn {
  /** List of dicts about the columns selected from the cursors, likely empty for DDL statements. See notes. */
  description?: Record<string, unknown> | Record<string, unknown>[];
  /** List of lists of strings containing selected rows, likely empty for DDL statements. */
  results?: unknown[] | unknown[][];
  /** The number of rows selected or modified according to the cursor defaults to V(-1). See notes. */
  row_count?: string;
}

export const odbc = defineModule<OdbcArgs, OdbcReturn>("community.general.odbc");
