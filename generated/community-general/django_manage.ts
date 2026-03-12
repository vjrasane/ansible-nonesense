// Auto-generated from: community.general.django_manage
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DjangoManageArgs {
  /** A list of space-delimited apps to target. Used by the V(test) command. */
  apps?: string;
  /** The name of the table used for database-backed caching. Used by the V(createcachetable) command. */
  cache_table?: string;
  /** Clear the existing files before trying to copy or link the original file. */
  clear?: boolean;
  /** The name of the Django management command to run. The commands listed below are built in this module and have some basic parameter validation. */
  command: string;
  /** The database to target. Used by the V(createcachetable), V(flush), V(loaddata), V(syncdb), and V(migrate) commands. */
  database?: string;
  /** Fail the command immediately if a test fails. Used by the V(test) command. */
  failfast?: boolean;
  /** A space-delimited list of fixture file names to load in the database. B(Required) by the V(loaddata) command. */
  fixtures?: string;
  /** Creates links to the files instead of copying them, you can only use this parameter with V(collectstatic) command. */
  link?: boolean;
  /** Runs out-of-order or missing migrations as they are not rollback migrations, you can only use this parameter with V(migrate) command. */
  merge?: boolean;
  /** The path to the root of the Django application where C(manage.py) lives. */
  project_path: string;
  /** A directory to add to the Python path. Typically used to include the settings module if it is located external to the application directory. */
  pythonpath?: string;
  /** The Python path to the application's settings module, such as V(myapp.settings). */
  settings?: string;
  /** Skips over out-of-order missing migrations, you can only use this parameter with V(migrate) command. */
  skip?: boolean;
  /** Controls the test runner class that is used to execute tests. */
  testrunner?: string;
  /** An optional path to a C(virtualenv) installation to use while running the manage application. */
  virtualenv?: string;
}

export type DjangoManageReturn = Record<string, unknown>;

export const django_manage = defineModule<DjangoManageArgs, DjangoManageReturn>("community.general.django_manage");
