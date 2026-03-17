// Auto-generated from: community.general.selinux_permissive
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SelinuxPermissiveArgs {
  /** The domain that is added or removed from the list of permissive domains. */
  domain: string;
  /** Disable reloading of the SELinux policy after making change to a domain's permissive setting. */
  no_reload?: boolean;
  /** Indicate if the domain should or should not be set as permissive. */
  permissive: boolean;
  /** Name of the SELinux policy store to use. */
  store?: string;
}

export type SelinuxPermissiveReturn = Record<string, unknown>;

export const selinux_permissive = defineModule<SelinuxPermissiveArgs, SelinuxPermissiveReturn>("community.general.selinux_permissive");
