// Auto-generated from: community.general.flatpak
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface FlatpakArgs {
  /** The path to the C(flatpak) executable to use. */
  executable?: string;
  /** The installation method to use. */
  method?: "system" | "user";
  /** The name of the flatpak to manage. To operate on several packages this can accept a list of packages. */
  name: string | string[];
  /** If installing runtime dependencies should be omitted or not. */
  no_dependencies?: boolean;
  /** The flatpak remote (repository) to install the flatpak from. */
  remote?: string;
  /** Indicates the desired package state. */
  state?: "absent" | "present" | "latest";
}

export interface FlatpakReturn {
  /** The exact flatpak command that was executed. */
  command?: string;
}

export const flatpak = defineModule<FlatpakArgs, FlatpakReturn>("community.general.flatpak");
