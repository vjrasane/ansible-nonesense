// Auto-generated from: community.general.timezone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface TimezoneArgs {
  /** Whether the hardware clock is in UTC or in local timezone. */
  hwclock?: "local" | "UTC";
  /** Name of the timezone for the system clock. */
  name?: string;
}

export type TimezoneReturn = Record<string, unknown>;

export const timezone = defineModule<TimezoneArgs, TimezoneReturn>("community.general.timezone");
