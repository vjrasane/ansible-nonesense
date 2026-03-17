// Auto-generated from: community.general.file_remove
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface FileRemoveArgs {
  /** Type of files to remove. */
  file_type?: "any" | "file" | "link";
  /** Path to the directory where files should be removed. */
  path: string;
  /** Pattern to match files for removal. */
  pattern: string;
  /** If V(true), search for files recursively in subdirectories. */
  recursive?: boolean;
  /** If V(true), O(pattern) is interpreted as a regular expression. */
  use_regex?: boolean;
}

export interface FileRemoveReturn {
  /** Number of files removed. */
  files_count?: number;
  /** The directory path that was searched. */
  path?: string;
  /** List of files that were removed. */
  removed_files?: string | string[];
}

export const file_remove = defineModule<FileRemoveArgs, FileRemoveReturn>("community.general.file_remove");
