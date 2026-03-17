// Auto-generated from: community.general.opendj_backendprop
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OpendjBackendpropArgs {
  /** The name of the backend on which the property needs to be updated. */
  backend: string;
  /** The hostname of the OpenDJ server. */
  hostname: string;
  /** The configuration setting to update. */
  name: string;
  /** The path to the bin directory of OpenDJ. */
  opendj_bindir?: string;
  /** The password for O(username). */
  password?: string;
  /** Location to the password file which holds the password for O(username). */
  passwordfile?: string;
  /** The Admin port on which the OpenDJ instance is available. */
  port: string;
  /** If configuration needs to be added/updated. */
  state?: string;
  /** The username to connect with. */
  username?: string;
  /** The value for the configuration item. */
  value: string;
}

export type OpendjBackendpropReturn = Record<string, unknown>;

export const opendj_backendprop = defineModule<OpendjBackendpropArgs, OpendjBackendpropReturn>("community.general.opendj_backendprop");
