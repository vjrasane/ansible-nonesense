// Auto-generated from: community.general.django_createcachetable
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DjangoCreatecachetableArgs {
  /** Specify the database to be used. */
  database?: string;
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

export interface DjangoCreatecachetableReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}

export const django_createcachetable = defineModule<DjangoCreatecachetableArgs, DjangoCreatecachetableReturn>("community.general.django_createcachetable");
