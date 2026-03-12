// Auto-generated from: community.general.nosh
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface NoshArgs {
  /** Enable or disable the service, independently of C(*.preset) file preference or running state. Mutually exclusive with O(preset). It takes effect prior to O(state=reset). */
  enabled?: boolean;
  /** Name of the service to manage. */
  name: string;
  /** Enable or disable the service according to local preferences in C(*.preset) files. Mutually exclusive with O(enabled). Only has an effect if set to true. It takes effect prior to O(state=reset). */
  preset?: boolean;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. */
  state?: "started" | "stopped" | "reset" | "restarted" | "reloaded";
  /** Run system-control talking to the calling user's service manager, rather than the system-wide service manager. */
  user?: boolean;
}

export interface NoshReturn {
  /** Whether the service is enabled at system bootstrap. */
  enabled?: boolean;
  /** Name used to find the service. */
  name?: string;
  /** Whether the enabled status reflects the one set in the relevant C(*.preset) file. */
  preset?: boolean;
  /** Resolved path for the service. */
  service_path?: string;
  /** Service process run state, V(none) if the service is not loaded and will not be started. */
  state?: string;
  /** A dictionary with the key=value pairs returned by C(system-control show-json) or V(none) if the service is not loaded. */
  status?: unknown;
  /** Whether the user-level service manager is called. */
  user?: boolean;
}

export const nosh = defineModule<NoshArgs, NoshReturn>("community.general.nosh");
