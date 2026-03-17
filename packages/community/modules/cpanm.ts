// Auto-generated from: community.general.cpanm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CpanmArgs {
  /** Override the path to the C(cpanm) executable. */
  executable?: string;
  /** The local directory or C(tar.gz) file to install from. */
  from_path?: string;
  /** If V(true), installs dependencies declared as recommends per META spec. */
  install_recommendations?: boolean;
  /** If V(true), installs dependencies declared as suggests per META spec. */
  install_suggestions?: boolean;
  /** Only install dependencies. */
  installdeps?: boolean;
  /** Specify the install base to install modules. */
  locallib?: string;
  /** Specifies the base URL for the CPAN mirror to use. */
  mirror?: string;
  /** Use the mirror's index file instead of the CPAN Meta DB. */
  mirror_only?: boolean;
  /** Controls the module behavior. See notes below for more details. */
  mode?: "compatibility" | "new";
  /** The Perl library to install. Valid values change according to the O(mode), see notes for more details. */
  name?: string;
  /** When O(mode=new), this parameter can be used to check if there is a module O(name) installed (at O(version), when specified). */
  name_check?: string;
  /** Do not run unit tests. */
  notest?: boolean;
  /** Version specification for the perl module. When O(mode=new), C(cpanm) version operators are accepted. */
  version?: string;
}

export interface CpanmReturn {
  /** Version of CPANMinus. */
  cpanm_version?: string;
}

export const cpanm = defineModule<CpanmArgs, CpanmReturn>("community.general.cpanm");
