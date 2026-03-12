// Auto-generated from: community.general.aix_devices
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AixDevicesArgs {
  /** A list of device attributes. */
  attributes?: Record<string, unknown>;
  /** The name of the device. */
  device?: string;
  /** Forces action. */
  force?: boolean;
  /** Removes or defines a device and children devices. */
  recursive?: boolean;
  /** Controls the device state. */
  state?: "available" | "defined" | "removed";
}

export type AixDevicesReturn = Record<string, unknown>;

export const aix_devices = defineModule<AixDevicesArgs, AixDevicesReturn>("community.general.aix_devices");
