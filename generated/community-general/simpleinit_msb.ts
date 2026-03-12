// Auto-generated from: community.general.simpleinit_msb
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SimpleinitMsbArgs {
  /** Whether the service should start on boot. */
  enabled?: boolean;
  /** Name of the service. */
  name: string;
  /** V(started)/V(stopped) are idempotent actions that do not run commands unless necessary. V(restarted) always bounces the service. V(reloaded) always reloads. */
  state?: "running" | "started" | "stopped" | "restarted" | "reloaded";
}

export type SimpleinitMsbReturn = Record<string, unknown>;

export const simpleinit_msb = defineModule<SimpleinitMsbArgs, SimpleinitMsbReturn>("community.general.simpleinit_msb");
