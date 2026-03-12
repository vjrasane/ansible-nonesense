// Auto-generated from: community.general.pipx
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PipxArgs {
  /** Install the project in editable mode. */
  editable?: boolean;
  /** Path to the C(pipx) installed in the system. */
  executable?: string;
  /** Force modification of the application's virtual environment. See C(pipx) for details. */
  force?: boolean;
  /** The module passes the C(--global) argument to C(pipx), to execute actions in global scope. */
  global?: boolean;
  /** Upgrade the injected packages along with the application. */
  include_injected?: boolean;
  /** Base URL of Python Package Index. */
  index_url?: string;
  /** Packages to be injected into an existing virtual environment. */
  inject_packages?: string | string[];
  /** Add apps from the injected packages. */
  install_apps?: boolean;
  /** Include applications of dependent packages. */
  install_deps?: boolean;
  /** The name of the application and also the name of the Python package being installed. */
  name?: string;
  /** Arbitrary arguments to pass directly to C(pip). */
  pip_args?: string;
  /** Python version to be used when creating the application virtual environment. Must be 3.6+. */
  python?: string;
  /** Source for the package. This option is used when O(state=install) or O(state=latest), and it is ignored with other states. */
  source?: string;
  /** Spec metadata file for O(state=install_all). */
  spec_metadata?: string;
  /** Desired state for the application. */
  state?: "present" | "absent" | "install" | "install_all" | "uninstall" | "uninstall_all" | "inject" | "uninject" | "upgrade" | "upgrade_shared" | "upgrade_all" | "reinstall" | "reinstall_all" | "latest" | "pin" | "unpin";
  /** Optional suffix for virtual environment and executable names. */
  suffix?: string;
  /** Give application virtual environment access to the system site-packages directory. */
  system_site_packages?: boolean;
}

export interface PipxReturn {
  /** Version of pipx. */
  version?: string;
}

export const pipx = defineModule<PipxArgs, PipxReturn>("community.general.pipx");
