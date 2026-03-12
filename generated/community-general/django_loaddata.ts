// Auto-generated from: community.general.django_loaddata
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DjangoLoaddataArgs {
  /** Specifies a single app to look for fixtures in rather than looking in all apps. */
  app?: string;
  /** Specify the database to be used. */
  database?: string;
  /** Applications or models to be excluded. */
  excludes?: string | string[];
  /** List of paths to the fixture files. */
  fixtures?: string | string[];
  /** Serialization format of the output data. */
  format?: "xml" | "json" | "jsonl" | "yaml";
  /** Ignores fields and models that may have been removed since the fixture was originally generated. */
  ignore_non_existent?: boolean;
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

export interface DjangoLoaddataReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}

export const django_loaddata = defineModule<DjangoLoaddataArgs, DjangoLoaddataReturn>("community.general.django_loaddata");
