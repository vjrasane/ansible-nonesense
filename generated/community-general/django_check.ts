// Auto-generated from: community.general.django_check
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DjangoCheckArgs {
  /** Restrict checks to specific applications. */
  apps?: string | string[];
  /** Specify databases to run checks against. */
  databases?: string | string[];
  /** Include additional checks relevant in a deployment setting. */
  deploy?: boolean;
  /** Message level that triggers failure. */
  fail_level?: "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG";
  /** Adds the given filesystem path to the Python import search path. */
  pythonpath?: string;
  /** Specifies the settings module to use. */
  settings: string;
  /** Skips running system checks prior to running the command. */
  skip_checks?: boolean;
  /** Restrict checks to specific tags. */
  tags?: string | string[];
  /** Provides a full stack trace in the output when a C(CommandError) is raised. */
  traceback?: boolean;
  /** Use the Python interpreter from this virtual environment. */
  venv?: string;
  /** Specifies the amount of notification and debug information in the output of C(django-admin). */
  verbosity?: number;
}

export interface DjangoCheckReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}

export const django_check = defineModule<DjangoCheckArgs, DjangoCheckReturn>("community.general.django_check");
