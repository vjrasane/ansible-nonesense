// Auto-generated from: community.general.aix_lvg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AixLvgArgs {
  /** Force volume group creation. */
  force?: boolean;
  /** The size of the physical partition in megabytes. */
  pp_size?: number;
  /** List of comma-separated devices to use as physical devices in this volume group. */
  pvs?: string | string[];
  /** Control if the volume group exists and volume group AIX state varyonvg V(varyon) or varyoffvg V(varyoff). */
  state?: "absent" | "present" | "varyoff" | "varyon";
  /** The name of the volume group. */
  vg: string;
  /** The type of the volume group. */
  vg_type?: "big" | "normal" | "scalable";
}

export type AixLvgReturn = Record<string, unknown>;

export const aix_lvg = defineModule<AixLvgArgs, AixLvgReturn>("community.general.aix_lvg");
