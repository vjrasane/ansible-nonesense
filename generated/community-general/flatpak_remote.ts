// Auto-generated from: community.general.flatpak_remote
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface FlatpakRemoteArgs {
  /** Indicates whether this remote is enabled. */
  enabled?: boolean;
  /** The path to the C(flatpak) executable to use. */
  executable?: string;
  /** The URL to the C(flatpakrepo) file representing the repository remote to add. */
  flatpakrepo_url?: string;
  /** The installation method to use. */
  method?: "system" | "user";
  /** The desired name for the flatpak remote to be registered under on the managed host. */
  name: string;
  /** Indicates the desired package state. */
  state?: "absent" | "present";
}

export interface FlatpakRemoteReturn {
  /** The exact flatpak command that was executed. */
  command?: string;
}

export const flatpak_remote = defineModule<FlatpakRemoteArgs, FlatpakRemoteReturn>("community.general.flatpak_remote");
