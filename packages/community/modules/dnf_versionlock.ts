// Auto-generated from: community.general.dnf_versionlock
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DnfVersionlockArgs {
  /** Package name spec to add or exclude to or delete from the C(locklist) using the format expected by the C(dnf repoquery) command. */
  name?: string | string[];
  /** Do not resolve package name specs to NEVRAs to find specific version to lock to. Instead the package name specs are used as they are. This enables locking to not yet available versions of the package. */
  raw?: boolean;
  /** Whether to add (V(present) or V(excluded)) to or remove (V(absent) or V(clean)) from the C(locklist). */
  state?: "absent" | "clean" | "excluded" | "present";
}

export interface DnfVersionlockReturn {
  /** Locklist after module execution. */
  locklist_post?: string | string[];
  /** Locklist before module execution. */
  locklist_pre?: string | string[];
  /** Package name specs meant to be added by versionlock. */
  specs_toadd?: string | string[];
  /** Package name specs meant to be deleted by versionlock. */
  specs_todelete?: string | string[];
}

export const dnf_versionlock = defineModule<DnfVersionlockArgs, DnfVersionlockReturn>("community.general.dnf_versionlock");
