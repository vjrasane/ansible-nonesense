// Auto-generated from: community.general.osx_defaults
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OsxDefaultsArgs {
  /** Add new elements to the array for a key which has an array as its value. */
  array_add?: boolean;
  /** Checks if the type of the provided O(value) matches the type of an existing default. */
  check_type?: boolean;
  /** The domain is a domain name of the form C(com.companyname.appname). */
  domain?: string;
  /** The host on which the preference should apply. */
  host?: string;
  /** The key of the user preference. */
  key?: string;
  /** The path in which to search for C(defaults). */
  path?: string;
  /** The state of the user defaults. */
  state?: "absent" | "list" | "present";
  /** The type of value to write. */
  type?: "array" | "bool" | "boolean" | "date" | "float" | "int" | "integer" | "string";
  /** The value to write. */
  value?: unknown;
}

export type OsxDefaultsReturn = Record<string, unknown>;

export const osx_defaults = defineModule<OsxDefaultsArgs, OsxDefaultsReturn>("community.general.osx_defaults");
