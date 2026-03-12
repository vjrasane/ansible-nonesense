// Auto-generated from: community.general.pip_package_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PipPackageInfoArgs {
  /** A list of the pip executables that are used to get the packages. They can be supplied with the full path or just the executable name, for example V(pip3.7). */
  clients?: string | string[];
}

export interface PipPackageInfoReturn {
  /** A dictionary of installed package data. */
  packages?: Record<string, unknown>;
}

export const pip_package_info = defineModule<PipPackageInfoArgs, PipPackageInfoReturn>("community.general.pip_package_info");
