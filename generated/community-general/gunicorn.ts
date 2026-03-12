// Auto-generated from: community.general.gunicorn
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GunicornArgs {
  /** The app module. A name refers to a WSGI callable that should be found in the specified module. */
  app: string;
  /** Chdir to specified directory before apps loading. */
  chdir?: string;
  /** Path to the gunicorn configuration file. */
  config?: string;
  /** A filename to use for the PID file. If not set and not found on the configuration file a tmp pid file is created to check a successful run of gunicorn. */
  pid?: string;
  /** Switch worker processes to run as this user. */
  user?: string;
  /** Path to the virtualenv directory. */
  venv?: string;
  /** The type of workers to use. The default class (sync) should handle most "normal" types of workloads. */
  worker?: "sync" | "eventlet" | "gevent" | "tornado " | "gthread" | "gaiohttp";
}

export interface GunicornReturn {
  /** Process ID of gunicorn. */
  gunicorn?: string;
}

export const gunicorn = defineModule<GunicornArgs, GunicornReturn>("community.general.gunicorn");
