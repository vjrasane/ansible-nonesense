// Auto-generated from: community.general.systemd_creds_decrypt
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SystemdCredsDecryptArgs {
  /** The credential name to validate the embedded credential name. */
  name?: string;
  /** Whether to add a trailing newline character to the end of the output, if not present. */
  newline?: boolean;
  /** The secret to decrypt. */
  secret: string;
  /** The timestamp to use to validate the V(not-after) timestamp that was used during encryption. */
  timestamp?: string;
  /** Whether to transcode the output before returning it. */
  transcode?: "base64" | "unbase64" | "hex" | "unhex";
  /** A user name or numeric UID when decrypting from a specific user context. */
  user?: string;
}

export interface SystemdCredsDecryptReturn {
  /** The decrypted secret. */
  value?: string;
}

export const systemd_creds_decrypt = defineModule<SystemdCredsDecryptArgs, SystemdCredsDecryptReturn>("community.general.systemd_creds_decrypt");
