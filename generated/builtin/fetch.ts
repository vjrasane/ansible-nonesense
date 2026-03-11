// Auto-generated from: ansible.builtin.fetch
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface FetchArgs {
  /** A directory to save the file into. */
  dest: string;
  /** When set to V(true), the task will fail if the remote file cannot be read for any reason. */
  fail_on_missing?: boolean;
  /** Allows you to override the default behavior of appending hostname/path/to/file to the destination. */
  flat?: boolean;
  /** The file on the remote system to fetch. */
  src: string;
  /** Verify that the source and destination checksums match after the files are fetched. */
  validate_checksum?: boolean;
}

export type FetchReturn = Record<string, unknown>;

export const fetch = defineModule<FetchArgs, FetchReturn>("ansible.builtin.fetch");
