// Auto-generated from: community.general.systemd_creds_encrypt
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SystemdCredsEncryptArgs {
  /** The credential name to embed in the encrypted credential data. */
  name?: string;
  /** The time when the credential shall not be used anymore. */
  not_after?: string;
  /** Pretty print the output so that it may be pasted directly into a unit file. */
  pretty?: boolean;
  /** The secret to encrypt. */
  secret: string;
  /** The timestamp to embed into the encrypted credential. */
  timestamp?: string;
  /** A user name or numeric UID to encrypt the credential for. */
  user?: string;
}

export interface SystemdCredsEncryptReturn {
  /** The Base64 encoded encrypted secret. */
  value?: string;
}

export const systemd_creds_encrypt = defineModule<SystemdCredsEncryptArgs, SystemdCredsEncryptReturn>("community.general.systemd_creds_encrypt");
