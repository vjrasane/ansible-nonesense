// Auto-generated from: ansible.builtin.dpkg_selections
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DpkgSelectionsArgs {
  /** Name of the package. */
  name: string;
  /** The selection state to set the package to. */
  selection: "install" | "hold" | "deinstall" | "purge";
}

export type DpkgSelectionsReturn = Record<string, unknown>;

export const dpkg_selections = defineModule<DpkgSelectionsArgs, DpkgSelectionsReturn>("ansible.builtin.dpkg_selections");
