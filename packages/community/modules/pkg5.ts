// Auto-generated from: community.general.pkg5
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Pkg5Args {
  /** Accept any licences. */
  accept_licenses?: boolean;
  /** Creates a new boot environment with the given name. */
  be_name?: string;
  /** An FRMI of the package(s) to be installed/removed/updated. */
  name: string | string[];
  /** Refresh publishers before execution. */
  refresh?: boolean;
  /** Whether to install (V(present), V(latest)), or remove (V(absent)) a package. */
  state?: "absent" | "latest" | "present" | "installed" | "removed" | "uninstalled";
  /** Set to V(true) to disable quiet execution. */
  verbose?: boolean;
}

export type Pkg5Return = Record<string, unknown>;

export const pkg5 = defineModule<Pkg5Args, Pkg5Return>("community.general.pkg5");
