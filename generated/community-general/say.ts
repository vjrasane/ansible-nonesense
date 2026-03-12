// Auto-generated from: community.general.say
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SayArgs {
  /** What to say. */
  msg: string;
  /** What voice to use. */
  voice?: string;
}

export type SayReturn = Record<string, unknown>;

export const say = defineModule<SayArgs, SayReturn>("community.general.say");
