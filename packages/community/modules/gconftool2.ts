// Auto-generated from: community.general.gconftool2
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Gconftool2Args {
  /** Specify a configuration source to use rather than the default path. */
  config_source?: string;
  /** Access the config database directly, bypassing server. If O(direct) is specified then the O(config_source) must be specified as well. */
  direct?: boolean;
  /** A GConf preference key is an element in the GConf repository that corresponds to an application preference. */
  key: string;
  /** The action to take upon the key/value. */
  state: "absent" | "present";
  /** Preference keys typically have simple values such as strings, integers, or lists of strings and integers. This is ignored unless O(state=present). */
  value?: string;
  /** The type of value being set. This is ignored unless O(state=present). */
  value_type?: "bool" | "float" | "int" | "string";
}

export interface Gconftool2Return {
  /** The key specified in the module parameters. */
  key?: string;
  /** The value of the preference key before executing the module. */
  previous_value?: string;
  /** The value of the preference key after executing the module or V(null) if key is removed. */
  value?: string;
  /** The type of the value that was changed. */
  value_type?: string;
  /** Version of gconftool-2. */
  version?: string;
}

export const gconftool2 = defineModule<Gconftool2Args, Gconftool2Return>("community.general.gconftool2");
