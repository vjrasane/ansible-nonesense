// Auto-generated from: community.general.wakeonlan
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface WakeonlanArgs {
  /** Network broadcast address to use for broadcasting magic Wake-on-LAN packet. */
  broadcast?: string;
  /** MAC address to send Wake-on-LAN broadcast packet for. */
  mac: string;
  /** UDP port to use for magic Wake-on-LAN packet. */
  port?: number;
}

export type WakeonlanReturn = Record<string, unknown>;

export const wakeonlan = defineModule<WakeonlanArgs, WakeonlanReturn>("community.general.wakeonlan");
