// Auto-generated from: community.general.runit
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RunitArgs {
  /** Whether the service is enabled or not, if disabled it also implies stopped. */
  enabled?: boolean;
  /** Name of the service to manage. */
  name: string;
  /** Directory runsv watches for services. */
  service_dir?: string;
  /** Directory where services are defined, the source of symlinks to O(service_dir). */
  service_src?: string;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. */
  state?: "killed" | "once" | "reloaded" | "restarted" | "started" | "stopped";
}

export type RunitReturn = Record<string, unknown>;

export const runit = defineModule<RunitArgs, RunitReturn>("community.general.runit");
