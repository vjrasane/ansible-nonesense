// Auto-generated from: community.general.snap
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SnapArgs {
  /** Define which release of a snap is installed and tracked for updates. This option can only be specified if there is a single snap in the task. */
  channel?: string;
  /** Install a snap that has classic confinement. */
  classic?: boolean;
  /** Install the snap in dangerous mode, without validating its assertions and signatures. */
  dangerous?: boolean;
  /** Name of the snaps to be installed. */
  name: string | string[];
  /** Set options with pattern C(key=value) or C(snap:key=value). If a snap name is given, the option is applied to that snap only. If the snap name is omitted, the options are applied to all snaps listed in O(name). Options are only applied to active snaps. */
  options?: string | string[];
  /** Desired state of the package. */
  state?: "absent" | "present" | "enabled" | "disabled";
}

export interface SnapReturn {
  /** The channel the snaps were installed from. */
  channel?: string;
  /** Whether or not the snaps were installed with the classic confinement. */
  classic?: boolean;
  /** The command that was executed on the host. */
  cmd?: string;
  /** The list of options set/changed in format C(snap:key=value). */
  options_changed?: string | string[];
  /** The list of actually installed snaps. */
  snaps_installed?: string | string[];
  /** The list of actually removed snaps. */
  snaps_removed?: string | string[];
  /** Versions of snap components as reported by C(snap version). */
  version?: Record<string, unknown>;
}

export const snap = defineModule<SnapArgs, SnapReturn>("community.general.snap");
