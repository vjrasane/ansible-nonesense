// Auto-generated from: ansible.builtin.tempfile
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface TempfileArgs {
  /** Location where temporary file or directory should be created. */
  path?: string;
  /** Prefix of file/directory name created by module. */
  prefix?: string;
  /** Whether to create file or directory. */
  state?: "directory" | "file";
  /** Suffix of file/directory name created by module. */
  suffix?: string;
}

export interface TempfileReturn {
  /** Path to created file or directory. */
  path?: string;
}

export const tempfile = defineModule<TempfileArgs, TempfileReturn>("ansible.builtin.tempfile");
