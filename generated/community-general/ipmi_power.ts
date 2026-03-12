// Auto-generated from: community.general.ipmi_power
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpmiPowerArgs {
  /** Encryption key to connect to the BMC in hex format. */
  key?: string;
  /** Provide a list of the remote target address for the bridge IPMI request, and the power status. */
  machine?: Record<string, unknown> | Record<string, unknown>[];
  /** Hostname or IP address of the BMC. */
  name: string;
  /** Password to connect to the BMC. */
  password: string;
  /** Remote RMCP port. */
  port?: number;
  /** Whether to ensure that the machine in desired state. */
  state?: "on" | "off" | "shutdown" | "reset" | "boot";
  /** Maximum number of seconds before interrupt request. */
  timeout?: number;
  /** Username to use to connect to the BMC. */
  user: string;
}

export interface IpmiPowerReturn {
  /** The current power state of the machine. */
  powerstate?: string;
  /** The current power state of the machine when the machine option is set. */
  status?: Record<string, unknown> | Record<string, unknown>[];
}

export const ipmi_power = defineModule<IpmiPowerArgs, IpmiPowerReturn>("community.general.ipmi_power");
