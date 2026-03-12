// Auto-generated from: community.general.keyring_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeyringInfoArgs {
  /** Password to unlock keyring. */
  keyring_password: string;
  /** The name of the service. */
  service: string;
  /** The user belonging to the service. */
  username: string;
}

export interface KeyringInfoReturn {
  /** A string containing the password. */
  passphrase?: string;
}

export const keyring_info = defineModule<KeyringInfoArgs, KeyringInfoReturn>("community.general.keyring_info");
