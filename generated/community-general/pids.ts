// Auto-generated from: community.general.pids
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PidsArgs {
  /** Ignore case in pattern if using the O(pattern) option. */
  ignore_case?: boolean;
  /** The name of the process(es) you want to get PID(s) for. */
  name?: string;
  /** The pattern (regular expression) to match the process(es) you want to get PID(s) for. */
  pattern?: string;
}

export interface PidsReturn {
  /** Process IDs of the given process. */
  pids?: string | string[];
}

export const pids = defineModule<PidsArgs, PidsReturn>("community.general.pids");
