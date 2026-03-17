// Auto-generated from: community.general.scaleway_database_backup
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayDatabaseBackupArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name used to identify the database. */
  database_name?: string;
  /** Expiration datetime of the database backup (ISO 8601 format). */
  expires_at?: string;
  /** UUID used to identify the database backup. */
  id?: string;
  /** UUID of the instance associated to the database backup. */
  instance_id?: string;
  /** Name used to identify the database backup. */
  name?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** Indicate desired state of the database backup. */
  state?: "present" | "absent" | "exported" | "restored";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Wait for the instance to reach its desired state before returning. */
  wait?: boolean;
  /** Time to wait before every attempt to check the state of the backup. */
  wait_sleep_time?: number;
  /** Time to wait for the backup to reach the expected state. */
  wait_timeout?: number;
}

export interface ScalewayDatabaseBackupReturn {
  /** Backup metadata. */
  metadata?: Record<string, unknown>;
}

export const scaleway_database_backup = defineModule<ScalewayDatabaseBackupArgs, ScalewayDatabaseBackupReturn>("community.general.scaleway_database_backup");
