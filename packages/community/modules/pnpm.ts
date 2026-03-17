// Auto-generated from: community.general.pnpm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PnpmArgs {
  /** Alias of the Node.js library. */
  alias?: string;
  /** Install dependencies in development mode. */
  dev?: boolean;
  /** The executable location for pnpm. */
  executable?: string;
  /** Install the Node.js library globally. */
  global?: boolean;
  /** Use the C(--ignore-scripts) flag when installing. */
  ignore_scripts?: boolean;
  /** The name of a Node.js library to install. */
  name?: string;
  /** Do not install optional packages, equivalent to C(--no-optional). */
  no_optional?: boolean;
  /** Install dependencies in optional mode. */
  optional?: boolean;
  /** The base path to install the Node.js libraries. */
  path?: string;
  /** Install dependencies in production mode. */
  production?: boolean;
  /** Installation state of the named Node.js library. */
  state?: "present" | "absent" | "latest";
  /** The version of the library to be installed, in semver format. */
  version?: string;
}

export type PnpmReturn = Record<string, unknown>;

export const pnpm = defineModule<PnpmArgs, PnpmReturn>("community.general.pnpm");
