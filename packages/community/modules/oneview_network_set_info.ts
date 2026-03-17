// Auto-generated from: community.general.oneview_network_set_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneviewNetworkSetInfoArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Network Set name. */
  name?: string;
  /** List with options to gather information about Network Set. Option allowed: V(withoutEthernet). The option V(withoutEthernet) retrieves the list of network_sets excluding Ethernet networks. */
  options?: string | string[];
  /** List of parameters to delimit, filter and sort the list of resources. */
  params?: Record<string, unknown>;
  /** Password for API authentication. */
  password?: string;
  /** Username for API authentication. */
  username?: string;
}

export interface OneviewNetworkSetInfoReturn {
  /** Has all the OneView information about the Network Sets. */
  network_sets?: Record<string, unknown>;
}

export const oneview_network_set_info = defineModule<OneviewNetworkSetInfoArgs, OneviewNetworkSetInfoReturn>("community.general.oneview_network_set_info");
