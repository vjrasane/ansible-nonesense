// Auto-generated from: community.general.homebrew_services
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HomebrewServicesArgs {
  /** An installed homebrew package whose service is to be updated. */
  name: string;
  /** A V(:) separated list of paths to search for C(brew) executable. Since a package (I(formula) in homebrew parlance) location is prefixed relative to the actual path of C(brew) command, providing an alternative C(brew) path enables managing different set of packages in an alternative location in the system. */
  path?: string;
  /** State of the package's service. */
  state?: "present" | "absent" | "restarted";
}

export interface HomebrewServicesReturn {
  /** If the service is now running, this is the PID of the service, otherwise -1. */
  pid?: number;
  /** Whether the service is running after running this command. */
  running?: boolean;
}

export const homebrew_services = defineModule<HomebrewServicesArgs, HomebrewServicesReturn>("community.general.homebrew_services");
