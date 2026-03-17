// Auto-generated from: ansible.builtin.stat
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface StatArgs {
  /** Algorithm to determine checksum of file. */
  checksum_algorithm?: "md5" | "sha1" | "sha224" | "sha256" | "sha384" | "sha512";
  /** Whether to follow symlinks. */
  follow?: boolean;
  /** Get file attributes using lsattr tool if present. */
  get_attributes?: boolean;
  /** Whether to return a checksum of the file. */
  get_checksum?: boolean;
  /** Use file magic and return data about the nature of the file. This uses the C(file) utility found on most Linux/Unix systems. */
  get_mime?: boolean;
  /** Get file SELinux context in a list V([user, role, type, range]), and will get V([None, None, None, None]) if it is not possible to retrieve the context, either because it does not exist or some other issue. */
  get_selinux_context?: boolean;
  /** The full path of the file/object to get the facts of. */
  path: string;
}

export interface StatReturn {
  /** Dictionary containing all the stat data, some platforms might add additional fields. */
  stat?: Record<string, unknown>;
}

export const stat = defineModule<StatArgs, StatReturn>("ansible.builtin.stat");
