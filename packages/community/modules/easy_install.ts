// Auto-generated from: community.general.easy_install
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface EasyInstallArgs {
  /** The explicit executable or a pathname to the executable to be used to run easy_install for a specific version of Python installed in the system. For example V(easy_install-3.3), if there are both Python 2.7 and 3.3 installations in the system and you want to run easy_install for the Python 3.3 installation. */
  executable?: string;
  /** A Python library name. */
  name: string;
  /** The desired state of the library. V(latest) ensures that the latest version is installed. */
  state?: "present" | "latest";
  /** An optional O(virtualenv) directory path to install into. If the O(virtualenv) does not exist, it is created automatically. */
  virtualenv?: string;
  /** The command to create the virtual environment with. For example V(pyvenv), V(virtualenv), V(virtualenv2). */
  virtualenv_command?: string;
  /** Whether the virtual environment inherits packages from the global site-packages directory. Note that this setting has no effect on an already existing virtual environment, so if you want to change it, the environment must be deleted and newly created. */
  virtualenv_site_packages?: boolean;
}

export type EasyInstallReturn = Record<string, unknown>;

export const easy_install = defineModule<EasyInstallArgs, EasyInstallReturn>("community.general.easy_install");
