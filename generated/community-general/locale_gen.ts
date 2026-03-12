// Auto-generated from: community.general.locale_gen
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LocaleGenArgs {
  /** Name and encoding of the locales, such as V(en_GB.UTF-8). */
  name: string | string[];
  /** Whether the locales shall be present. */
  state?: "absent" | "present";
}

export interface LocaleGenReturn {
  /** Mechanism used to deploy the locales. */
  mechanism?: "glibc" | "ubuntu_legacy";
}

export const locale_gen = defineModule<LocaleGenArgs, LocaleGenReturn>("community.general.locale_gen");
