// Auto-generated from: community.general.django_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DjangoCommandArgs {
  /** Django admin command. It must be a valid command accepted by C(python -m django) at the target system. */
  command: string;
  /** List of extra arguments passed to the django admin command. */
  extra_args?: string | string[];
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

export interface DjangoCommandReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}

export const django_command = defineModule<DjangoCommandArgs, DjangoCommandReturn>("community.general.django_command");
