// Auto-generated from: ansible.builtin.slurp
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SlurpArgs {
  /** The file on the remote system to fetch. This I(must) be a file, not a directory. */
  src: string;
}

export interface SlurpReturn {
  /** Encoded file content */
  content?: string;
  /** Type of encoding used for file */
  encoding?: string;
  /** Actual path of file slurped */
  source?: string;
}

export const slurp = defineModule<SlurpArgs, SlurpReturn>("ansible.builtin.slurp");
