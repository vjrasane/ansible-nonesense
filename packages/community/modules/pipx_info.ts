// Auto-generated from: community.general.pipx_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PipxInfoArgs {
  /** Path to the C(pipx) installed in the system. */
  executable?: string;
  /** The module passes the C(--global) argument to C(pipx), to execute actions in global scope. */
  global?: boolean;
  /** Include dependent packages in the output. */
  include_deps?: boolean;
  /** Include injected packages in the output. */
  include_injected?: boolean;
  /** Returns the raw output of C(pipx list --json). */
  include_raw?: boolean;
  /** Name of an application installed with C(pipx). */
  name?: string;
}

export interface PipxInfoReturn {
  /** The list of installed applications. */
  application?: Record<string, unknown> | Record<string, unknown>[];
  /** Command executed to obtain the list of installed applications. */
  cmd?: string | string[];
  /** The raw output of the C(pipx list) command, when O(include_raw=true). Used for debugging. */
  raw_output?: Record<string, unknown>;
  /** Version of pipx. */
  version?: string;
}

export const pipx_info = defineModule<PipxInfoArgs, PipxInfoReturn>("community.general.pipx_info");
