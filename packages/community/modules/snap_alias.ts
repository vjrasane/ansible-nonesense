// Auto-generated from: community.general.snap_alias
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SnapAliasArgs {
  /** Aliases to be created or removed. */
  alias?: string | string[];
  /** Name of the snap. */
  name?: string;
  /** Desired state of the alias. */
  state?: "absent" | "present";
}

export interface SnapAliasReturn {
  /** The snap aliases after execution. If called in check mode, then the list represents the state before execution. */
  snap_aliases?: string | string[];
  /** Versions of snap components as reported by C(snap version). */
  version?: Record<string, unknown>;
}

export const snap_alias = defineModule<SnapAliasArgs, SnapAliasReturn>("community.general.snap_alias");
