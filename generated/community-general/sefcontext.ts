// Auto-generated from: community.general.sefcontext
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SefcontextArgs {
  /** The file type that should have SELinux contexts applied. */
  ftype?: "a" | "b" | "c" | "d" | "f" | "l" | "p" | "s";
  /** Useful for scenarios (chrooted environment) that you cannot get the real SELinux state. */
  ignore_selinux_state?: boolean;
  /** Reload SELinux policy after commit. */
  reload?: boolean;
  /** SELinux range for the specified O(target). */
  selevel?: string;
  /** SELinux type for the specified O(target). */
  setype?: string;
  /** SELinux user for the specified O(target). */
  seuser?: string;
  /** Whether the SELinux file context must be V(absent) or V(present). */
  state?: "absent" | "present";
  /** Path to use to substitute file context(s) for the specified O(target). The context labeling for the O(target) subtree is made equivalent to this path. */
  substitute?: string;
  /** Target path (expression). */
  target: string;
}

export type SefcontextReturn = Record<string, unknown>;

export const sefcontext = defineModule<SefcontextArgs, SefcontextReturn>("community.general.sefcontext");
