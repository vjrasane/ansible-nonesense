// Auto-generated from: community.general.pacman_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacmanKeyArgs {
  /** The keyfile contents to add to the keyring. */
  data?: string;
  /** Ensure that the key is trusted (signed by the Pacman machine key and not expired). */
  ensure_trusted?: boolean;
  /** The path to a keyfile on the remote server to add to the keyring. */
  file?: string;
  /** This forces the key to be updated if it already exists in the keyring. */
  force_update?: boolean;
  /** The 40 character identifier of the key. */
  id: string;
  /** The full path to the keyring folder on the remote server. */
  keyring?: string;
  /** The keyserver used to retrieve key from. */
  keyserver?: string;
  /** Ensures that the key is V(present) (added) or V(absent) (revoked). */
  state?: "absent" | "present";
  /** The URL to retrieve keyfile from. */
  url?: string;
  /** Whether or not to verify the keyfile's key ID against specified key ID. */
  verify?: boolean;
}

export type PacmanKeyReturn = Record<string, unknown>;

export const pacman_key = defineModule<PacmanKeyArgs, PacmanKeyReturn>("community.general.pacman_key");
