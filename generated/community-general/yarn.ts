// Auto-generated from: community.general.yarn
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface YarnArgs {
  /** The executable location for yarn. */
  executable?: string;
  /** Install the Node.js library globally. */
  global?: boolean;
  /** Use the C(--ignore-scripts) flag when installing. */
  ignore_scripts?: boolean;
  /** The name of a Node.js library to install. */
  name?: string;
  /** The base path where Node.js installs libraries. */
  path?: string;
  /** Install dependencies in production mode. */
  production?: boolean;
  /** The registry to install modules from. */
  registry?: string;
  /** Installation state of the named Node.js library. */
  state?: "present" | "absent" | "latest";
  /** The version of the library to be installed. */
  version?: string;
}

export interface YarnReturn {
  /** Output generated from Yarn. */
  out?: string;
}

export const yarn = defineModule<YarnArgs, YarnReturn>("community.general.yarn");
