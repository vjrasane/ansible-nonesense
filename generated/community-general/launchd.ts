// Auto-generated from: community.general.launchd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LaunchdArgs {
  /** Whether the service should start on boot. */
  enabled?: boolean;
  /** Whether the service should not be restarted automatically by launchd. */
  force_stop?: boolean;
  /** Name of the service. */
  name: string;
  /** Name of the V(.plist) file for the service. */
  plist?: string;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. */
  state?: "reloaded" | "restarted" | "started" | "stopped" | "unloaded";
}

export interface LaunchdReturn {
  /** Metadata about service status. */
  status?: Record<string, unknown>;
}

export const launchd = defineModule<LaunchdArgs, LaunchdReturn>("community.general.launchd");
