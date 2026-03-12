// Auto-generated from: community.general.smartos_image_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SmartosImageInfoArgs {
  /** Criteria for selecting image. Can be any value from image manifest and V(published_date), V(published), V(source), V(clones), and V(size). */
  filters?: string;
}

export type SmartosImageInfoReturn = Record<string, unknown>;

export const smartos_image_info = defineModule<SmartosImageInfoArgs, SmartosImageInfoReturn>("community.general.smartos_image_info");
