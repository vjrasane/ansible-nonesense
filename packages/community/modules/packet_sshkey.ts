// Auto-generated from: community.general.packet_sshkey
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacketSshkeyArgs {
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** Fingerprint of the key which you want to remove. */
  fingerprint?: string;
  /** UUID of the key which you want to remove. */
  id?: string;
  /** Public Key string (V({type} {base64 encoded key} {description})). */
  key?: string;
  /** File with the public key. */
  key_file?: string;
  /** Label for the key. If you keep it empty, it is read from key string. */
  label?: string;
  /** Indicate desired state of the target. */
  state?: "present" | "absent";
}

export interface PacketSshkeyReturn {
  /** Information about sshkeys that were created/removed. */
  sshkeys?: string | string[];
}

export const packet_sshkey = defineModule<PacketSshkeyArgs, PacketSshkeyReturn>("community.general.packet_sshkey");
