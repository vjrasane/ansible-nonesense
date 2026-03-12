// Auto-generated from: community.general.dimensiondata_vlan
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DimensiondataVlanArgs {
  /** Permit expansion of the target VLAN's network if the module parameters specify a larger network than the VLAN currently possesses. */
  allow_expand?: boolean;
  /** A description of the VLAN. */
  description?: string;
  /** The target datacenter. */
  location: string;
  /** The password used to authenticate to the CloudControl API. */
  mcp_password?: string;
  /** The username used to authenticate to the CloudControl API. */
  mcp_user?: string;
  /** The name of the target VLAN. */
  name: string;
  /** The ID or name of the target network domain. */
  network_domain: string;
  /** The base address for the VLAN's IPv4 network (for example V(192.168.1.0)). */
  private_ipv4_base_address?: string;
  /** The size of the IPv4 address space, for example V(24). */
  private_ipv4_prefix_size?: number;
  /** The target region. */
  region?: string;
  /** The desired state for the target VLAN. */
  state?: "present" | "absent" | "readonly";
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Should we wait for the task to complete before moving onto the next. */
  wait?: boolean;
  /** The amount of time (in seconds) to wait between checks for task completion. */
  wait_poll_interval?: number;
  /** The maximum amount of time (in seconds) to wait for the task to complete. */
  wait_time?: number;
}

export interface DimensiondataVlanReturn {
  /** Dictionary describing the VLAN. */
  vlan?: unknown;
}

export const dimensiondata_vlan = defineModule<DimensiondataVlanArgs, DimensiondataVlanReturn>("community.general.dimensiondata_vlan");
