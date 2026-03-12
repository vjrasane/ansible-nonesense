// Auto-generated from: community.general.pam_limits
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PamLimitsArgs {
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** Comment associated with the limit. */
  comment?: string;
  /** Modify the limits.conf path. */
  dest?: string;
  /** A username, @groupname, wildcard, UID/GID range. */
  domain: string;
  /** The limit to be set. */
  limit_item: "core" | "data" | "fsize" | "memlock" | "nofile" | "rss" | "stack" | "cpu" | "nproc" | "as" | "maxlogins" | "maxsyslogins" | "priority" | "locks" | "sigpending" | "msgqueue" | "nice" | "rtprio" | "chroot";
  /** Limit type, see C(man 5 limits.conf) for an explanation. */
  limit_type: "hard" | "soft" | "-";
  /** If set to V(true), the maximal value is used or conserved. */
  use_max?: boolean;
  /** If set to V(true), the minimal value is used or conserved. */
  use_min?: boolean;
  /** The value of the limit. */
  value: string;
}

export type PamLimitsReturn = Record<string, unknown>;

export const pam_limits = defineModule<PamLimitsArgs, PamLimitsReturn>("community.general.pam_limits");
