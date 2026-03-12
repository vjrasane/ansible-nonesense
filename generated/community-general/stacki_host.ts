// Auto-generated from: community.general.stacki_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface StackiHostArgs {
  /** Appliance to be used in host creation. */
  appliance?: string;
  /** Set value to V(true) to force node into install state if it already exists in stacki. */
  force_install?: boolean;
  /** Name of the host to be added to Stacki. */
  name: string;
  /** Network to be configured in the host. */
  network?: string;
  /** Name of the primary network interface. */
  prim_intf?: string;
  /** IP Address for the primary network interface. */
  prim_intf_ip?: string;
  /** MAC Address for the primary PXE boot network interface. */
  prim_intf_mac?: string;
  /** Rack to be used in host creation. */
  rack?: number;
  /** Rank to be used in host creation. */
  rank?: number;
  /** URL for the Stacki API Endpoint. */
  stacki_endpoint: string;
  /** Password for authenticating with Stacki API, but if not specified, the environment variable E(stacki_password) is used instead. */
  stacki_password: string;
  /** Username for authenticating with Stacki API, but if not specified, the environment variable E(stacki_user) is used instead. */
  stacki_user: string;
  /** Set value to the desired state for the specified host. */
  state?: "absent" | "present";
}

export type StackiHostReturn = Record<string, unknown>;

export const stacki_host = defineModule<StackiHostArgs, StackiHostReturn>("community.general.stacki_host");
