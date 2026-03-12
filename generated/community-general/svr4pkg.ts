// Auto-generated from: community.general.svr4pkg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface Svr4pkgArgs {
  /** Install/Remove category instead of a single package. */
  category?: boolean;
  /** Package name, for example V(SUNWcsr). */
  name: string;
  /** HTTP[s] proxy to be used if O(src) is a URL. */
  proxy?: string;
  /** Specifies the location of a response file to be used if package expects input on install. */
  response_file?: string;
  /** Specifies the location to install the package from. Required when O(state=present). */
  src?: string;
  /** Whether to install (V(present)), or remove (V(absent)) a package. */
  state: "present" | "absent";
  /** Whether to install the package only in the current zone, or install it into all zones. */
  zone?: "current" | "all";
}

export type Svr4pkgReturn = Record<string, unknown>;

export const svr4pkg = defineModule<Svr4pkgArgs, Svr4pkgReturn>("community.general.svr4pkg");
