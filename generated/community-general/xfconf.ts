// Auto-generated from: community.general.xfconf
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface XfconfArgs {
  /** A Xfconf preference channel is a top-level tree key, inside of the Xfconf repository that corresponds to the location for which all application properties/keys are stored. See man xfconf-query(1). */
  channel: string;
  /** Force array even if only one element. */
  force_array?: boolean;
  /** A Xfce preference key is an element in the Xfconf repository that corresponds to an application preference. See man xfconf-query(1). */
  property: string;
  /** The action to take upon the property/value. */
  state?: "present" | "absent";
  /** Preference properties typically have simple values such as strings, integers, or lists of strings and integers. See man xfconf-query(1). */
  value?: unknown | unknown[];
  /** The type of value being set. */
  value_type?: "string" | "int" | "double" | "bool" | "uint" | "uchar" | "char" | "uint64" | "int64" | "float";
}

export interface XfconfReturn {
  /** The channel specified in the module parameters. */
  channel?: string;
  /** A list with the resulting C(xfconf-query) command executed by the module. */
  cmd?: string | string[];
  /** The value of the preference key before executing the module. Either a single string value or a list of strings for array types. */
  previous_value?: unknown;
  /** The property specified in the module parameters. */
  property?: string;
  /** The value of the preference key after executing the module. Either a single string value or a list of strings for array types. */
  value?: unknown;
  /** The type of the value that was changed (V(none) for O(state=reset)). Either a single string value or a list of strings for array types. */
  value_type?: unknown;
  /** The version of the C(xfconf-query) command. */
  version?: string;
}

export const xfconf = defineModule<XfconfArgs, XfconfReturn>("community.general.xfconf");
