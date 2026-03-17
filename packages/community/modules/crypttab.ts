// Auto-generated from: community.general.crypttab
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CrypttabArgs {
  /** Path to the underlying block device or file, or the UUID of a block-device prefixed with V(UUID=). */
  backing_device?: string;
  /** Name of the encrypted block device as it appears in the C(/etc/crypttab) file, or optionally prefixed with V(/dev/mapper/), as it appears in the filesystem. V(/dev/mapper/) is stripped from O(name). */
  name: string;
  /** A comma-delimited list of options. See V(crypttab(5\)) for details. */
  opts?: string;
  /** Encryption password, the path to a file containing the password, or V(-) or unset if the password should be entered at boot. */
  password?: string;
  /** Path to file to use instead of V(/etc/crypttab). */
  path?: string;
  /** Use V(present) to add a line to C(/etc/crypttab) or update its definition if already present. */
  state: "absent" | "opts_absent" | "opts_present" | "present";
}

export type CrypttabReturn = Record<string, unknown>;

export const crypttab = defineModule<CrypttabArgs, CrypttabReturn>("community.general.crypttab");
