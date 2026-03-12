// Auto-generated from: community.general.haproxy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HaproxyArgs {
  /** Disable/enable agent checks (depending on O(state) value). */
  agent?: boolean;
  /** Name of the HAProxy backend pool. */
  backend?: string;
  /** Wait until the server has no active connections or until the timeout determined by O(wait_interval) and O(wait_retries) is reached. */
  drain?: boolean;
  /** Fail whenever trying to enable/disable a backend host that does not exist. */
  fail_on_not_found?: boolean;
  /** Disable/enable health checks (depending on O(state) value). */
  health?: boolean;
  /** Name of the backend host to change. */
  host: string;
  /** When disabling a server, immediately terminate all the sessions attached to the specified server. */
  shutdown_sessions?: boolean;
  /** Path to the HAProxy socket file. */
  socket?: string;
  /** Desired state of the provided backend host. */
  state: "disabled" | "drain" | "enabled";
  /** Wait until the server reports a status of C(UP) when O(state=enabled), status of C(MAINT) when O(state=disabled) or status of C(DRAIN) when O(state=drain). */
  wait?: boolean;
  /** Number of seconds to wait between retries. */
  wait_interval?: number;
  /** Number of times to check for status after changing the state. */
  wait_retries?: number;
  /** The value passed in argument. */
  weight?: string;
}

export type HaproxyReturn = Record<string, unknown>;

export const haproxy = defineModule<HaproxyArgs, HaproxyReturn>("community.general.haproxy");
