// Auto-generated from: community.general.sorcery
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SorceryArgs {
  /** Time in seconds to invalidate grimoire collection on update. */
  cache_valid_time?: number;
  /** Comma-separated list of _optional_ dependencies to build a spell (or make sure it is built) with; use V(+)/V(-) in front of dependency to turn it on/off (V(+) is optional though). */
  depends?: string;
  /** Name of the spell or grimoire. */
  name?: string | string[];
  /** Repository location. */
  repository?: string;
  /** Whether to cast, dispel or rebuild a package. */
  state?: "present" | "latest" | "absent" | "cast" | "dispelled" | "rebuild";
  /** Whether or not to update sorcery scripts at the very first stage. */
  update?: boolean;
  /** Whether or not to update grimoire collection before casting spells. */
  update_cache?: boolean;
}

export type SorceryReturn = Record<string, unknown>;

export const sorcery = defineModule<SorceryArgs, SorceryReturn>("community.general.sorcery");
