// Auto-generated from: community.general.seport
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SeportArgs {
  /** Run independent of selinux runtime state. */
  ignore_selinux_state?: boolean;
  /** Work with local modifications only. */
  local?: boolean;
  /** Ports or port ranges. */
  ports: string | string[];
  /** Protocol for the specified port. */
  proto: "tcp" | "udp";
  /** Reload SELinux policy after commit. */
  reload?: boolean;
  /** SELinux type for the specified port. */
  setype: string;
  /** Desired boolean value. */
  state?: "absent" | "present";
}

export type SeportReturn = Record<string, unknown>;

export const seport = defineModule<SeportArgs, SeportReturn>("community.general.seport");
