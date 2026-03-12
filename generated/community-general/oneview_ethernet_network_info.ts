// Auto-generated from: community.general.oneview_ethernet_network_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneviewEthernetNetworkInfoArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Ethernet Network name. */
  name?: string;
  /** List with options to gather additional information about an Ethernet Network and related resources. Options allowed: V(associatedProfiles) and V(associatedUplinkGroups). */
  options?: string | string[];
  /** List of parameters to delimit, filter and sort the list of resources. */
  params?: Record<string, unknown>;
  /** Password for API authentication. */
  password?: string;
  /** Username for API authentication. */
  username?: string;
}

export interface OneviewEthernetNetworkInfoReturn {
  /** Has all the OneView information about the profiles which are using the Ethernet network. */
  enet_associated_profiles?: Record<string, unknown>;
  /** Has all the OneView information about the uplink sets which are using the Ethernet network. */
  enet_associated_uplink_groups?: Record<string, unknown>;
  /** Has all the OneView information about the Ethernet Networks. */
  ethernet_networks?: Record<string, unknown>;
}

export const oneview_ethernet_network_info = defineModule<OneviewEthernetNetworkInfoArgs, OneviewEthernetNetworkInfoReturn>("community.general.oneview_ethernet_network_info");
