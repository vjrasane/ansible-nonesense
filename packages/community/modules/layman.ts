// Auto-generated from: community.general.layman
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LaymanArgs {
  /** An URL of the alternative overlays list that defines the overlay to install. This list is fetched and saved under C(${overlay_defs}/${name}.xml), where C(overlay_defs) is read from the Layman's configuration. */
  list_url?: string;
  /** The overlay ID to install, synchronize, or uninstall. Use V(ALL) to sync all of the installed overlays (can be used only when O(state=updated)). */
  name: string;
  /** Whether to install (V(present)), sync (V(updated)), or uninstall (V(absent)) the overlay. */
  state?: "present" | "absent" | "updated";
  /** If V(false), SSL certificates are not validated. This should only be set to V(false) when no other option exists. */
  validate_certs?: boolean;
}

export type LaymanReturn = Record<string, unknown>;

export const layman = defineModule<LaymanArgs, LaymanReturn>("community.general.layman");
