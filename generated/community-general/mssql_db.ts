// Auto-generated from: community.general.mssql_db
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MssqlDbArgs {
  /** Automatically commit the change only if the import succeed. Sometimes it is necessary to use autocommit=true, since some content can not be changed within a transaction. */
  autocommit?: boolean;
  /** Host running the database. */
  login_host: string;
  /** The password used to authenticate with. */
  login_password?: string;
  /** Port of the MSSQL server. Requires login_host be defined as other than localhost if login_port is used. */
  login_port?: string;
  /** The username used to authenticate with. */
  login_user?: string;
  /** Name of the database to add or remove. */
  name: string;
  /** The database state. */
  state?: "present" | "absent" | "import";
  /** Location, on the remote host, of the dump file to read from or write to. Uncompressed SQL files (C(.sql)) files are supported. */
  target?: string;
}

export type MssqlDbReturn = Record<string, unknown>;

export const mssql_db = defineModule<MssqlDbArgs, MssqlDbReturn>("community.general.mssql_db");
