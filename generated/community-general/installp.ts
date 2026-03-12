// Auto-generated from: community.general.installp
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface InstallpArgs {
  /** Whether to accept the license for the package(s). */
  accept_license?: boolean;
  /** One or more packages to install or remove. */
  name: string | string[];
  /** Path with AIX packages (required to install). */
  repository_path?: string;
  /** Whether the package needs to be present on or absent from the system. */
  state?: "absent" | "present";
}

export type InstallpReturn = Record<string, unknown>;

export const installp = defineModule<InstallpArgs, InstallpReturn>("community.general.installp");
