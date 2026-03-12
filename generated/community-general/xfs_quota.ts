// Auto-generated from: community.general.xfs_quota
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface XfsQuotaArgs {
  /** Hard blocks quota limit. */
  bhard?: string;
  /** Soft blocks quota limit. */
  bsoft?: string;
  /** Hard inodes quota limit. */
  ihard?: number;
  /** Soft inodes quota limit. */
  isoft?: number;
  /** The mount point on which to apply the quotas. */
  mountpoint: string;
  /** The name of the user, group or project to apply the quota to, if other than default. */
  name?: string;
  /** Hard realtime blocks quota limit. */
  rtbhard?: string;
  /** Soft realtime blocks quota limit. */
  rtbsoft?: string;
  /** Whether to apply the limits or remove them. */
  state?: "present" | "absent";
  /** The XFS quota type. */
  type: "user" | "group" | "project";
}

export interface XfsQuotaReturn {
  /** The current C(bhard) setting in bytes. */
  bhard?: number;
  /** The current C(bsoft) setting in bytes. */
  bsoft?: number;
  /** The current C(ihard) setting in bytes. */
  ihard?: number;
  /** The current C(isoft) setting in bytes. */
  isoft?: number;
  /** The current C(rtbhard) setting in bytes. */
  rtbhard?: number;
  /** The current C(rtbsoft) setting in bytes. */
  rtbsoft?: number;
}

export const xfs_quota = defineModule<XfsQuotaArgs, XfsQuotaReturn>("community.general.xfs_quota");
