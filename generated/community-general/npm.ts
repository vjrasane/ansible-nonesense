// Auto-generated from: community.general.npm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface NpmArgs {
  /** Install packages based on package-lock file, same as running C(npm ci). */
  ci?: boolean;
  /** The executable location for npm. */
  executable?: string;
  /** Use the C(--force) flag when installing. */
  force?: boolean;
  /** Install the node.js library globally. */
  global?: boolean;
  /** Use the C(--ignore-scripts) flag when installing. */
  ignore_scripts?: boolean;
  /** The name of a node.js library to install. */
  name?: string;
  /** Use the C(--no-bin-links) flag when installing. */
  no_bin_links?: boolean;
  /** Use the C(--no-optional) flag when installing. */
  no_optional?: boolean;
  /** The base path where to install the node.js libraries. */
  path?: string;
  /** Install dependencies in production mode, excluding devDependencies. */
  production?: boolean;
  /** The registry to install modules from. */
  registry?: string;
  /** The state of the node.js library. */
  state?: "present" | "absent" | "latest";
  /** Use the C(--unsafe-perm) flag when installing. */
  unsafe_perm?: boolean;
  /** The version to be installed. */
  version?: string;
}

export type NpmReturn = Record<string, unknown>;

export const npm = defineModule<NpmArgs, NpmReturn>("community.general.npm");
