// Auto-generated from: community.general.macports
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MacportsArgs {
  /** A list of port names. */
  name?: string | string[];
  /** Update Macports and the ports tree, either prior to installing ports or as a separate step. */
  selfupdate?: boolean;
  /** Indicates the desired state of the port. */
  state?: "present" | "absent" | "active" | "inactive" | "installed" | "removed";
  /** Upgrade all outdated ports, either prior to installing ports or as a separate step. */
  upgrade?: boolean;
  /** A port variant specification. */
  variant?: string;
}

export type MacportsReturn = Record<string, unknown>;

export const macports = defineModule<MacportsArgs, MacportsReturn>("community.general.macports");
