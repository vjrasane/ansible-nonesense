// Auto-generated from: community.general.dpkg_divert
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface DpkgDivertArgs {
  /** The location where the versions of file are diverted. */
  divert?: string;
  /** When O(rename=true) and O(force=true), renaming is performed even if the target of the renaming exists, in other words the existing contents of the file at this location are lost. */
  force?: boolean;
  /** The name of the package whose copy of file is not diverted, also known as the diversion holder or the package the diversion belongs to. */
  holder?: string;
  /** The original and absolute path of the file to be diverted or undiverted. This path is unique, in other words it is not possible to get two diversions for the same O(path). */
  path: string;
  /** Actually move the file aside (when O(state=present)) or back (when O(state=absent)), but only when changing the state of the diversion. This parameter has no effect when attempting to add a diversion that already exists or when removing an unexisting one. */
  rename?: boolean;
  /** When O(state=absent), remove the diversion of the specified O(path); when O(state=present), create the diversion if it does not exist, or update its package O(holder) or O(divert) location, if it already exists. */
  state?: "absent" | "present";
}

export interface DpkgDivertReturn {
  /** The dpkg-divert commands ran internally by the module. */
  commands?: string | string[];
  /** The status of the diversion after task execution. */
  diversion?: Record<string, unknown>;
  /** The dpkg-divert relevant messages (stdout or stderr). */
  messages?: string | string[];
}

export const dpkg_divert = defineModule<DpkgDivertArgs, DpkgDivertReturn>("community.general.dpkg_divert");
