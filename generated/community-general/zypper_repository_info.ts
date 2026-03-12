// Auto-generated from: community.general.zypper_repository_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export type ZypperRepositoryInfoArgs = Record<string, unknown>;

export interface ZypperRepositoryInfoReturn {
  /** A list of repository descriptions like it is returned by the command C(zypper repos). */
  repodatalist?: Record<string, unknown> | Record<string, unknown>[];
}

export const zypper_repository_info = defineModule<ZypperRepositoryInfoArgs, ZypperRepositoryInfoReturn>("community.general.zypper_repository_info");
