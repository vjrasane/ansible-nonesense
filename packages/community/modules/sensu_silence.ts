// Auto-generated from: community.general.sensu_silence
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SensuSilenceArgs {
  /** Specifies the check which the silence entry applies to. */
  check?: string;
  /** Specifies the entity responsible for this entry. */
  creator?: string;
  /** If specified, the silence entry is automatically cleared after this number of seconds. */
  expire?: number;
  /** If specified as true, the silence entry is automatically cleared once the condition it is silencing is resolved. */
  expire_on_resolve?: boolean;
  /** If specified, this free-form string is used to provide context or rationale for the reason this silence entry was created. */
  reason?: string;
  /** Specifies to create or clear (delete) a silence entry using the Sensu API. */
  state?: "present" | "absent";
  /** Specifies the subscription which the silence entry applies to. */
  subscription: string;
  /** Specifies the URL of the Sensu monitoring host server. */
  url?: string;
}

export type SensuSilenceReturn = Record<string, unknown>;

export const sensu_silence = defineModule<SensuSilenceArgs, SensuSilenceReturn>("community.general.sensu_silence");
