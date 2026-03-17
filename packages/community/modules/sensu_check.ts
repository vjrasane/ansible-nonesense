// Auto-generated from: community.general.sensu_check
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SensuCheckArgs {
  /** Classifies the check as an aggregate check, making it available using the aggregate API. */
  aggregate?: boolean;
  /** Create a backup file (if yes), including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** Path to the sensu check to run (not required when O(state=absent)). */
  command?: string;
  /** A hash/dictionary of custom parameters for mixing to the configuration. */
  custom?: Record<string, unknown>;
  /** Other checks this one depends on. */
  dependencies?: string | string[];
  /** Whether the check should be handled or not. */
  handle?: boolean;
  /** List of handlers to notify when the check fails. */
  handlers?: string | string[];
  /** The high threshold for flap detection. */
  high_flap_threshold?: number;
  /** Check interval in seconds. */
  interval?: number;
  /** The low threshold for flap detection. */
  low_flap_threshold?: number;
  /** Whether the check is a metric. */
  metric?: boolean;
  /** The name of the check. */
  name: string;
  /** Number of event occurrences before the handler should take action. */
  occurrences?: number;
  /** Path to the JSON file of the check to be added/removed. */
  path?: string;
  /** Whether the check should be scheduled at all. */
  publish?: boolean;
  /** Number of seconds handlers should wait before taking second action. */
  refresh?: number;
  /** The check source, used to create a JIT Sensu client for an external resource (for example a network switch). */
  source?: string;
  /** Whether the check should be scheduled by the sensu client or server. */
  standalone?: boolean;
  /** Whether the check should be present or not. */
  state?: "present" | "absent";
  /** When to disable handling of check failures. */
  subdue_begin?: string;
  /** When to enable handling of check failures. */
  subdue_end?: string;
  /** List of subscribers/channels this check should run for. */
  subscribers?: string | string[];
  /** Timeout for the check. */
  timeout?: number;
  /** Time to live in seconds until the check is considered stale. */
  ttl?: number;
}

export type SensuCheckReturn = Record<string, unknown>;

export const sensu_check = defineModule<SensuCheckArgs, SensuCheckReturn>("community.general.sensu_check");
