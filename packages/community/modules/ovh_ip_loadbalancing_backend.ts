// Auto-generated from: community.general.ovh_ip_loadbalancing_backend
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OvhIpLoadbalancingBackendArgs {
  /** The applicationKey to use. */
  application_key: string;
  /** The application secret to use. */
  application_secret: string;
  /** The IP address of the backend to update / modify / delete. */
  backend: string;
  /** The consumer key to use. */
  consumer_key: string;
  /** The endpoint to use (for instance V(ovh-eu)). */
  endpoint: string;
  /** Name of the LoadBalancing internal name (V(ip-X.X.X.X)). */
  name: string;
  /** Determines the type of probe to use for this backend. */
  probe?: "none" | "http" | "icmp" | "oco";
  /** Determines whether the backend is to be created/modified or deleted. */
  state?: "present" | "absent";
  /** The timeout in seconds used to wait for a task to be completed. */
  timeout?: number;
  /** Determines the weight for this backend. */
  weight?: number;
}

export type OvhIpLoadbalancingBackendReturn = Record<string, unknown>;

export const ovh_ip_loadbalancing_backend = defineModule<OvhIpLoadbalancingBackendArgs, OvhIpLoadbalancingBackendReturn>("community.general.ovh_ip_loadbalancing_backend");
