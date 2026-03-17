// Auto-generated from: community.general.swupd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SwupdArgs {
  /** URL pointing to the contents of available bundles. If not specified, the contents are retrieved from clearlinux.org. */
  contenturl?: string;
  /** The format suffix for version file downloads. For example V(1), V(2), V(3), and so on, or the special value V(staging). If not specified, the default format is used. */
  format?: string;
  /** The manifest contains information about the bundles at certain version of the OS. Specify a Manifest version to verify against that version or leave unspecified to verify against the current version. */
  manifest?: number;
  /** Name of the (I)bundle to install or remove. */
  name?: string;
  /** Indicates the desired (I)bundle state. V(present) ensures the bundle is installed while V(absent) ensures the (I)bundle is not installed. */
  state?: "present" | "absent";
  /** Updates the OS to the latest version. */
  update?: boolean;
  /** Overrides both O(contenturl) and O(versionurl). */
  url?: string;
  /** Verify content for OS version. */
  verify?: boolean;
  /** URL for version string download. */
  versionurl?: string;
}

export type SwupdReturn = Record<string, unknown>;

export const swupd = defineModule<SwupdArgs, SwupdReturn>("community.general.swupd");
