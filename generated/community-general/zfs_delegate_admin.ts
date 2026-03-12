// Auto-generated from: community.general.zfs_delegate_admin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ZfsDelegateAdminArgs {
  /** Apply permissions to O(name)'s descendents (C(zfs allow -d)). */
  descendents?: boolean;
  /** Apply permissions to everyone. */
  everyone?: boolean;
  /** List of groups to whom permission(s) should be granted. */
  groups?: string | string[];
  /** Apply permissions to O(name) locally (C(zfs allow -l)). */
  local?: boolean;
  /** File system or volume name, for example V(rpool/myfs). */
  name: string;
  /** The list of permission(s) to delegate (required if O(state=present)). */
  permissions?: string | string[];
  /** Unallow permissions recursively (ignored when O(state=present)). */
  recursive?: boolean;
  /** Whether to allow (V(present)), or unallow (V(absent)) a permission. */
  state?: "absent" | "present";
  /** List of users to whom permission(s) should be granted. */
  users?: string | string[];
}

export type ZfsDelegateAdminReturn = Record<string, unknown>;

export const zfs_delegate_admin = defineModule<ZfsDelegateAdminArgs, ZfsDelegateAdminReturn>("community.general.zfs_delegate_admin");
