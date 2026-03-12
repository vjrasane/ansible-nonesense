// Auto-generated from: community.general.oneview_ethernet_network
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneviewEthernetNetworkArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** List with Ethernet Network properties. */
  data: Record<string, unknown>;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Password for API authentication. */
  password?: string;
  /** Indicates the desired state for the Ethernet Network resource. */
  state?: "present" | "absent" | "default_bandwidth_reset";
  /** Username for API authentication. */
  username?: string;
  /** When the ETag Validation is enabled, the request is conditionally processed only if the current ETag for the resource matches the ETag provided in the data. */
  validate_etag?: boolean;
}

export interface OneviewEthernetNetworkReturn {
  /** Has the facts about the Ethernet Networks. */
  ethernet_network?: Record<string, unknown>;
  /** Has the facts about the Ethernet Networks affected by the bulk insert. */
  ethernet_network_bulk?: Record<string, unknown>;
  /** Has the facts about the Ethernet Network Connection Template. */
  ethernet_network_connection_template?: Record<string, unknown>;
}

export const oneview_ethernet_network = defineModule<OneviewEthernetNetworkArgs, OneviewEthernetNetworkReturn>("community.general.oneview_ethernet_network");
