// Auto-generated from: community.general.cronvar
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CronvarArgs {
  /** If set, create a backup of the crontab before it is modified. The location of the backup is returned in the C(backup) variable by this module. */
  backup?: boolean;
  /** If specified, uses this file instead of an individual user's crontab. */
  cron_file?: string;
  /** If specified, the variable is inserted after the variable specified. */
  insertafter?: string;
  /** Used with O(state=present). If specified, the variable is inserted just before the variable specified. */
  insertbefore?: string;
  /** Name of the crontab variable. */
  name: string;
  /** Whether to ensure that the variable is present or absent. */
  state?: "absent" | "present";
  /** The specific user whose crontab should be modified. */
  user?: string;
  /** The value to set this variable to. */
  value?: string;
}

export type CronvarReturn = Record<string, unknown>;

export const cronvar = defineModule<CronvarArgs, CronvarReturn>("community.general.cronvar");
