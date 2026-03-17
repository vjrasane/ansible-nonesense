// Auto-generated from: community.general.cargo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CargoArgs {
  /** Path to the source directory to install the Rust package from. */
  directory?: string;
  /** Path to the C(cargo) installed in the system. */
  executable?: string;
  /** List of features to activate. */
  features?: string | string[];
  /** Install with locked dependencies. */
  locked?: boolean;
  /** The name of a Rust package to install. */
  name: string | string[];
  /** The base path where to install the Rust packages. Cargo automatically appends V(/bin). In other words, V(/usr/local) becomes V(/usr/local/bin). */
  path?: string;
  /** The state of the Rust package. */
  state?: "present" | "absent" | "latest";
  /** The version to install. If O(name) contains multiple values, the module tries to install all of them in this version. */
  version?: string;
}

export type CargoReturn = Record<string, unknown>;

export const cargo = defineModule<CargoArgs, CargoReturn>("community.general.cargo");
