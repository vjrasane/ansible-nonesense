// Auto-generated from: community.general.portinstall
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PortinstallArgs {
  /** Name of package to install/remove. */
  name: string;
  /** State of the package. */
  state?: "present" | "absent";
  /** Use packages instead of ports whenever available. */
  use_packages?: boolean;
}

export type PortinstallReturn = Record<string, unknown>;

export const portinstall = defineModule<PortinstallArgs, PortinstallReturn>("community.general.portinstall");
