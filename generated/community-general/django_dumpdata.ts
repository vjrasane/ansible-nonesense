// Auto-generated from: community.general.django_dumpdata
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DjangoDumpdataArgs {
  /** Dump all records, including those which might otherwise be filtered or modified by a custom manager. */
  all?: boolean;
  /** Dump only the applications and models listed in the dump. */
  apps_models?: string | string[];
  /** Specify the database to be used. */
  database?: string;
  /** Applications or models to be excluded. */
  excludes?: string | string[];
  /** Path to the output file. */
  fixture: string;
  /** Serialization format of the output data. */
  format?: "xml" | "json" | "jsonl" | "yaml";
  /** Indentation size for the output. */
  indent?: number;
  /** Use natural keys when serializing for foreign keys. */
  natural_foreign?: boolean;
  /** Omit primary keys when serializing. */
  natural_primary?: boolean;
  /** List of primary keys to include in the dump. */
  primary_keys?: string | string[];
  /** Adds the given filesystem path to the Python import search path. */
  pythonpath?: string;
  /** Specifies the settings module to use. */
  settings: string;
  /** Skips running system checks prior to running the command. */
  skip_checks?: boolean;
  /** Provides a full stack trace in the output when a C(CommandError) is raised. */
  traceback?: boolean;
  /** Use the Python interpreter from this virtual environment. */
  venv?: string;
  /** Specifies the amount of notification and debug information in the output of C(django-admin). */
  verbosity?: number;
}

export interface DjangoDumpdataReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}

export const django_dumpdata = defineModule<DjangoDumpdataArgs, DjangoDumpdataReturn>("community.general.django_dumpdata");
