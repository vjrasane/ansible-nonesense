// Auto-generated from: community.general.vexata_volume
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VexataVolumeArgs {
  /** Vexata VX100 array hostname or IPv4 Address. */
  array: string;
  /** Volume name. */
  name: string;
  /** Vexata API user password. */
  password?: string;
  /** Volume size in M, G, T units. M=2^20, G=2^30, T=2^40 bytes. */
  size?: string;
  /** Creates/Modifies volume when present or removes when absent. */
  state?: "present" | "absent";
  /** Vexata API user with administrative privileges. */
  user?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
}

export type VexataVolumeReturn = Record<string, unknown>;

export const vexata_volume = defineModule<VexataVolumeArgs, VexataVolumeReturn>("community.general.vexata_volume");
