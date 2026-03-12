// Auto-generated from: community.general.kernel_blacklist
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KernelBlacklistArgs {
  /** If specified, use this blacklist file instead of C(/etc/modprobe.d/blacklist-ansible.conf). */
  blacklist_file?: string;
  /** Name of kernel module to black- or whitelist. */
  name: string;
  /** Whether the module should be present in the blacklist or absent. */
  state?: "absent" | "present";
}

export type KernelBlacklistReturn = Record<string, unknown>;

export const kernel_blacklist = defineModule<KernelBlacklistArgs, KernelBlacklistReturn>("community.general.kernel_blacklist");
