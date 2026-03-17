// Auto-generated from: community.general.alternatives
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AlternativesArgs {
  /** The family groups similar alternatives. This option is available only on RHEL-based distributions. */
  family?: string;
  /** The path to the symbolic link that should point to the real executable. */
  link?: string;
  /** The generic name of the link. */
  name: string;
  /** The path to the real executable that the link should point to. */
  path?: string;
  /** The priority of the alternative. If no priority is given for creation V(50) is used as a fallback. */
  priority?: number;
  /** V(present) - install the alternative (if not already installed), but do not set it as the currently selected alternative for the group. */
  state?: "present" | "selected" | "auto" | "absent";
  /** A list of subcommands. */
  subcommands?: Record<string, unknown> | Record<string, unknown>[];
}

export type AlternativesReturn = Record<string, unknown>;

export const alternatives = defineModule<AlternativesArgs, AlternativesReturn>("community.general.alternatives");
