// Auto-generated from: community.general.oneview_enclosure_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneviewEnclosureInfoArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Enclosure name. */
  name?: string;
  /** List with options to gather additional information about an Enclosure and related resources. Options allowed: V(script), V(environmentalConfiguration), and V(utilization). For the option V(utilization), you can provide specific parameters. */
  options?: unknown | unknown[];
  /** List of parameters to delimit, filter and sort the list of resources. */
  params?: Record<string, unknown>;
  /** Password for API authentication. */
  password?: string;
  /** Username for API authentication. */
  username?: string;
}

export interface OneviewEnclosureInfoReturn {
  /** Has all the OneView information about the environmental configuration of an Enclosure. */
  enclosure_environmental_configuration?: Record<string, unknown>;
  /** Has all the OneView information about the script of an Enclosure. */
  enclosure_script?: string;
  /** Has all the OneView information about the utilization of an Enclosure. */
  enclosure_utilization?: Record<string, unknown>;
  /** Has all the OneView information about the Enclosures. */
  enclosures?: Record<string, unknown>;
}

export const oneview_enclosure_info = defineModule<OneviewEnclosureInfoArgs, OneviewEnclosureInfoReturn>("community.general.oneview_enclosure_info");
