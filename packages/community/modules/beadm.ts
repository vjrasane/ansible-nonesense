// Auto-generated from: community.general.beadm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BeadmArgs {
  /** Associate a description with a new boot environment. This option is available only on Solarish platforms. */
  description?: string;
  /** Specifies if the unmount should be forced. */
  force?: boolean;
  /** Path where to mount the ZFS boot environment. */
  mountpoint?: string;
  /** ZFS boot environment name. */
  name: string;
  /** Create the datasets for new BE with specific ZFS properties. */
  options?: string;
  /** If specified, the new boot environment is cloned from the given snapshot or inactive boot environment. */
  snapshot?: string;
  /** Create or delete ZFS boot environment. */
  state?: "absent" | "activated" | "mounted" | "present" | "unmounted";
}

export interface BeadmReturn {
  /** BE description. */
  description?: string;
  /** If forced action is wanted. */
  force?: boolean;
  /** BE mountpoint. */
  mountpoint?: string;
  /** BE name. */
  name?: string;
  /** BE additional options. */
  options?: string;
  /** ZFS snapshot to create BE from. */
  snapshot?: string;
  /** State of the target. */
  state?: string;
}

export const beadm = defineModule<BeadmArgs, BeadmReturn>("community.general.beadm");
