// Auto-generated from: community.general.xfconf_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XfconfInfoArgs {
  /** A Xfconf preference channel is a top-level tree key, inside of the Xfconf repository that corresponds to the location for which all application properties/keys are stored. */
  channel?: string;
  /** A Xfce preference key is an element in the Xfconf repository that corresponds to an application preference. */
  property?: string;
}

export interface XfconfInfoReturn {
  /** List of available channels. */
  channels?: string | string[];
  /** Flag indicating whether the property is an array or not. */
  is_array?: boolean;
  /** List of available properties for a specific channel. */
  properties?: string | string[];
  /** The value of the property. Empty if the property is of array type. */
  value?: string;
  /** The array value of the property. Empty if the property is not of array type. */
  value_array?: string | string[];
  /** The version of the C(xfconf-query) command. */
  version?: string;
}

export const xfconf_info = defineModule<XfconfInfoArgs, XfconfInfoReturn>("community.general.xfconf_info");
