// Auto-generated from: community.general.modprobe
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ModprobeArgs {
  /** Name of kernel module to manage. */
  name: string;
  /** Modules parameters. */
  params?: string;
  /** Persistency between reboots for configured module. */
  persistent?: "disabled" | "absent" | "present";
  /** Whether the module should be present or absent. */
  state?: "absent" | "present";
}

export type ModprobeReturn = Record<string, unknown>;

export const modprobe = defineModule<ModprobeArgs, ModprobeReturn>("community.general.modprobe");
