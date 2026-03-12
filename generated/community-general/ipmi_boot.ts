// Auto-generated from: community.general.ipmi_boot
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IpmiBootArgs {
  /** Set boot device to use on next reboot. */
  bootdev: "network" | "floppy" | "hd" | "safe" | "optical" | "setup" | "default";
  /** Encryption key to connect to the BMC in hex format. */
  key?: string;
  /** Hostname or IP address of the BMC. */
  name: string;
  /** Password to connect to the BMC. */
  password: string;
  /** If set, ask that system firmware uses this device beyond next boot. Be aware many systems do not honor this. */
  persistent?: boolean;
  /** Remote RMCP port. */
  port?: number;
  /** Whether to ensure that boot devices is desired. */
  state?: "present" | "absent";
  /** If set, request UEFI boot explicitly. Strictly speaking, the spec suggests that if not set, the system should BIOS boot and offers no "do not care" option. In practice, this flag not being set does not preclude UEFI boot on any system I have encountered. */
  uefiboot?: boolean;
  /** Username to use to connect to the BMC. */
  user: string;
}

export interface IpmiBootReturn {
  /** The boot device name which is used beyond next boot. */
  bootdev?: string;
  /** If V(true), system firmware uses this device beyond next boot. */
  persistent?: boolean;
  /** If V(true), system firmware uses UEFI boot explicitly beyond next boot. */
  uefimode?: boolean;
}

export const ipmi_boot = defineModule<IpmiBootArgs, IpmiBootReturn>("community.general.ipmi_boot");
