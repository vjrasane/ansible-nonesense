// Auto-generated from: community.general.sysupgrade
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SysupgradeArgs {
  /** Fetch and verify files and create C(/bsd.upgrade) but do not reboot. */
  fetch_only?: boolean;
  /** Force upgrade (for snapshots only). */
  force?: boolean;
  /** OpenBSD mirror top-level URL for fetching an upgrade. */
  installurl?: string;
  /** Keep the files under C(/home/_sysupgrade). */
  keep_files?: boolean;
  /** Apply the latest snapshot. */
  snapshot?: boolean;
}

export type SysupgradeReturn = Record<string, unknown>;

export const sysupgrade = defineModule<SysupgradeArgs, SysupgradeReturn>("community.general.sysupgrade");
