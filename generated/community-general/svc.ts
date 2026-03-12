// Auto-generated from: community.general.svc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SvcArgs {
  /** Should a C(down) file exist or not, if it exists it disables auto startup. Defaults to V(false). Downed does not imply stopped. */
  downed?: boolean;
  /** Whether the service is enabled or not, if disabled it also implies O(state=stopped). Take note that a service can be enabled and downed (no auto restart). */
  enabled?: boolean;
  /** Name of the service to manage. */
  name: string;
  /** Directory C(svscan) watches for services. */
  service_dir?: string;
  /** Directory where services are defined, the source of symlinks to O(service_dir). */
  service_src?: string;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. */
  state?: "killed" | "once" | "reloaded" | "restarted" | "started" | "stopped";
}

export type SvcReturn = Record<string, unknown>;

export const svc = defineModule<SvcArgs, SvcReturn>("community.general.svc");
