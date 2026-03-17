// Auto-generated from: community.general.aix_lvol
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AixLvolArgs {
  /** The number of copies of the logical volume. */
  copies?: number;
  /** The name of the logical volume. */
  lv: string;
  /** The type of the logical volume. */
  lv_type?: string;
  /** Free-form options to be passed to the mklv command. */
  opts?: string;
  /** Sets the interphysical volume allocation policy. */
  policy?: "maximum" | "minimum";
  /** A list of physical volumes, for example V([hdisk1, hdisk2]). */
  pvs?: string | string[];
  /** The size of the logical volume with one of the [MGT] units. */
  size?: string;
  /** Control if the logical volume exists. If V(present) and the volume does not already exist then the O(size) option is required. */
  state?: "absent" | "present";
  /** The volume group this logical volume is part of. */
  vg: string;
}

export interface AixLvolReturn {
  /** A friendly message describing the task result. */
  msg?: string;
}

export const aix_lvol = defineModule<AixLvolArgs, AixLvolReturn>("community.general.aix_lvol");
