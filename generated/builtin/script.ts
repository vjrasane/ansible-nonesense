// Auto-generated from: ansible.builtin.script
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScriptArgs {
  /** Change into this directory on the remote node before running the script. */
  chdir?: string;
  /** Path to the local script to run followed by optional arguments. */
  cmd?: string;
  /** A filename on the remote node, when it already exists, this step will B(not) be run. */
  creates?: string;
  /** This option controls the auto-decryption of source files using vault. */
  decrypt?: boolean;
  /** Name or path of an executable to invoke the script with. */
  executable?: string;
  /** Path to the local script file followed by optional arguments. */
  free_form?: string;
  /** A filename on the remote node, when it does not exist, this step will B(not) be run. */
  removes?: string;
}

export type ScriptReturn = Record<string, unknown>;

export const script = defineModule<ScriptArgs, ScriptReturn>("ansible.builtin.script");
