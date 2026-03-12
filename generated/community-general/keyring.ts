// Auto-generated from: community.general.keyring
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeyringArgs {
  /** Password to unlock keyring. */
  keyring_password: string;
  /** The name of the service. */
  service: string;
  /** Whether the password should exist. */
  state?: "present" | "absent";
  /** The password to set. */
  user_password?: string;
  /** The user belonging to the service. */
  username: string;
}

export type KeyringReturn = Record<string, unknown>;

export const keyring = defineModule<KeyringArgs, KeyringReturn>("community.general.keyring");
