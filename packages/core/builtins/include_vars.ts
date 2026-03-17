// Auto-generated from: ansible.builtin.include_vars
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IncludeVarsArgs {
  /** When using O(dir), this module will, by default, recursively go through each sub directory and load up the variables. By explicitly setting the depth, this module will only go as deep as the depth. */
  depth?: number;
  /** The directory name from which the variables should be loaded. */
  dir?: string;
  /** List of file extensions to read when using O(dir). */
  extensions?: string | string[];
  /** The file name from which variables should be loaded. */
  file?: string;
  /** Limit the files that are loaded within any directory to this regular expression. */
  files_matching?: string;
  /** This module allows you to specify the O(file) option directly without any other options. */
  "free-form"?: string;
  /** If set to V(merge), merges existing hash variables instead of overwriting them. */
  hash_behaviour?: "replace" | "merge";
  /** List of file names to ignore. */
  ignore_files?: string | string[];
  /** Ignore unknown file extensions within the directory. */
  ignore_unknown_extensions?: boolean;
  /** The name of a variable into which assign the included vars. */
  name?: string;
}

export interface IncludeVarsReturn {
  /** Variables that were included and their values */
  ansible_facts?: Record<string, unknown>;
  /** A list of files that were successfully included */
  ansible_included_var_files?: string | string[];
}

export const include_vars = defineModule<IncludeVarsArgs, IncludeVarsReturn>("ansible.builtin.include_vars");
