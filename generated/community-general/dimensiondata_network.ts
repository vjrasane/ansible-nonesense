// Auto-generated from: community.general.dimensiondata_network
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DimensiondataNetworkArgs {
  /** Additional description of the network domain. */
  description?: string;
  /** The target datacenter. */
  location: string;
  /** The password used to authenticate to the CloudControl API. */
  mcp_password?: string;
  /** The username used to authenticate to the CloudControl API. */
  mcp_user?: string;
  /** The name of the network domain to create. */
  name: string;
  /** The target region. */
  region?: string;
  /** The service plan, either "ESSENTIALS" or "ADVANCED". */
  service_plan?: "ESSENTIALS" | "ADVANCED";
  /** Should the resource be present or absent. */
  state?: "present" | "absent";
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Should we wait for the task to complete before moving onto the next. */
  wait?: boolean;
  /** The amount of time (in seconds) to wait between checks for task completion. */
  wait_poll_interval?: number;
  /** The maximum amount of time (in seconds) to wait for the task to complete. */
  wait_time?: number;
}

export interface DimensiondataNetworkReturn {
  /** Dictionary describing the network. */
  network?: unknown;
}

export const dimensiondata_network = defineModule<DimensiondataNetworkArgs, DimensiondataNetworkReturn>("community.general.dimensiondata_network");
