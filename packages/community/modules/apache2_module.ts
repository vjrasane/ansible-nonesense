// Auto-generated from: community.general.apache2_module
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Apache2ModuleArgs {
  /** Force disabling of default modules and override Debian warnings. */
  force?: boolean;
  /** Identifier of the module as listed by C(apache2ctl -M). This is optional and usually determined automatically by the common convention of appending V(_module) to O(name) as well as custom exception for popular modules. */
  identifier?: string;
  /** Ignore configuration checks about inconsistent module configuration. Especially for mpm_* modules. */
  ignore_configcheck?: boolean;
  /** Name of the module to enable/disable as given to C(a2enmod)/C(a2dismod). */
  name: string;
  /** Desired state of the module. */
  state?: "present" | "absent";
  /** Control the behavior of the warning process for MPM modules. */
  warn_mpm_absent?: boolean;
}

export interface Apache2ModuleReturn {
  /** Message about action taken. */
  result?: string;
}

export const apache2_module = defineModule<Apache2ModuleArgs, Apache2ModuleReturn>("community.general.apache2_module");
