// Auto-generated from: community.general.icinga2_feature
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Icinga2FeatureArgs {
  /** This is the feature name to enable or disable. */
  name: string;
  /** If set to V(present) and feature is disabled, then feature is enabled. */
  state?: "present" | "absent";
}

export type Icinga2FeatureReturn = Record<string, unknown>;

export const icinga2_feature = defineModule<Icinga2FeatureArgs, Icinga2FeatureReturn>("community.general.icinga2_feature");
