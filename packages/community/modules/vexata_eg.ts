// Auto-generated from: community.general.vexata_eg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface VexataEgArgs {
  /** Vexata VX100 array hostname or IPv4 Address. */
  array: string;
  /** Initiator group name. */
  ig?: string;
  /** Export group name. */
  name: string;
  /** Vexata API user password. */
  password?: string;
  /** Port group name. */
  pg?: string;
  /** Creates export group when present or delete when absent. */
  state?: "present" | "absent";
  /** Vexata API user with administrative privileges. */
  user?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
  /** Volume group name. */
  vg?: string;
}

export type VexataEgReturn = Record<string, unknown>;

export const vexata_eg = defineModule<VexataEgArgs, VexataEgReturn>("community.general.vexata_eg");
