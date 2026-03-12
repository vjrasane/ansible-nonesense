// Auto-generated from: community.general.mas
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MasArgs {
  /** The Mac App Store identifier of the app(s) you want to manage. */
  id?: number | number[];
  /** Desired state of the app installation. */
  state?: "absent" | "latest" | "present";
  /** Upgrade all installed Mac App Store apps. */
  upgrade_all?: boolean;
}

export type MasReturn = Record<string, unknown>;

export const mas = defineModule<MasArgs, MasReturn>("community.general.mas");
