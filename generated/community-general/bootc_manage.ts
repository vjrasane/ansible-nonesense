// Auto-generated from: community.general.bootc_manage
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface BootcManageArgs {
  /** The image to switch to. */
  image?: string;
  /** Control whether to apply the latest image or switch the image. */
  state: "switch" | "latest";
}

export type BootcManageReturn = Record<string, unknown>;

export const bootc_manage = defineModule<BootcManageArgs, BootcManageReturn>("community.general.bootc_manage");
