// Auto-generated from: community.general.statsd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface StatsdArgs {
  /** If the metric is of type V(gauge), change the value by O(delta). */
  delta?: boolean;
  /** StatsD host (hostname or IP) to send metrics to. */
  host?: string;
  /** The name of the metric. */
  metric: string;
  /** The prefix to add to the metric. */
  metric_prefix?: string;
  /** The type of metric. */
  metric_type: "counter" | "gauge";
  /** The port on O(host) which StatsD is listening on. */
  port?: number;
  /** The transport protocol to send metrics over. */
  protocol?: "udp" | "tcp";
  /** State of the check, only V(present) makes sense. */
  state?: "present";
  /** Sender timeout, only applicable if O(protocol) is V(tcp). */
  timeout?: number;
  /** The value of the metric. */
  value: number;
}

export type StatsdReturn = Record<string, unknown>;

export const statsd = defineModule<StatsdArgs, StatsdReturn>("community.general.statsd");
