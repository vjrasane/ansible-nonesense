// Auto-generated from: community.general.rpm_ostree_pkg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RpmOstreePkgArgs {
  /** Adds the options C(--apply-live) when O(state=present). */
  apply_live?: boolean;
  /** Name of overlay package to install or remove. */
  name: string | string[];
  /** State of the overlay package. */
  state?: "absent" | "present";
}

export interface RpmOstreePkgReturn {
  /** Action performed. */
  action?: string;
  /** Full command used for performed action. */
  cmd?: string;
  /** Determine if machine needs a reboot to apply current changes. */
  needs_reboot?: boolean;
  /** A list of packages specified. */
  packages?: string | string[];
}

export const rpm_ostree_pkg = defineModule<RpmOstreePkgArgs, RpmOstreePkgReturn>("community.general.rpm_ostree_pkg");
