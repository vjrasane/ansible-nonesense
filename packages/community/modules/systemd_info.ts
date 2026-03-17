// Auto-generated from: community.general.systemd_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SystemdInfoArgs {
  /** Additional properties to retrieve (appended to the default ones). */
  extra_properties?: string | string[];
  /** List of unit names to process. */
  unitname?: string | string[];
}

export interface SystemdInfoReturn {
  /** Dictionary of systemd unit info keyed by unit name. */
  units?: Record<string, unknown>;
}

export const systemd_info = defineModule<SystemdInfoArgs, SystemdInfoReturn>("community.general.systemd_info");
