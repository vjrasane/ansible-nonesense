// Auto-generated from: community.general.ovh_ip_failover
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OvhIpFailoverArgs {
  /** The applicationKey to use. */
  application_key: string;
  /** The application secret to use. */
  application_secret: string;
  /** The consumer key to use. */
  consumer_key: string;
  /** The endpoint to use (for instance V(ovh-eu)). */
  endpoint: string;
  /** The IP address to manage (can be a single IP like V(1.1.1.1) or a block like V(1.1.1.1/28)). */
  name: string;
  /** The name of the OVH service this IP address should be routed. */
  service: string;
  /** The timeout in seconds used to wait for a task to be completed. Default is 120 seconds. */
  timeout?: number;
  /** If V(true), the module waits for the IP address to be moved. If false, exit without waiting. The C(taskId) is returned in module output. */
  wait_completion?: boolean;
  /** If not V(0), the module waits for this task ID to be completed. Use O(wait_task_completion) if you want to wait for completion of a previously executed task with O(wait_completion=false). You can execute this module repeatedly on a list of failover IPs using O(wait_completion=false) (see examples). */
  wait_task_completion?: number;
}

export type OvhIpFailoverReturn = Record<string, unknown>;

export const ovh_ip_failover = defineModule<OvhIpFailoverArgs, OvhIpFailoverReturn>("community.general.ovh_ip_failover");
