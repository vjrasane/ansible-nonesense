// Auto-generated from: community.general.oneview_fc_network
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneviewFcNetworkArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** List with the Fibre Channel Network properties. */
  data: Record<string, unknown>;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Password for API authentication. */
  password?: string;
  /** Indicates the desired state for the Fibre Channel Network resource. */
  state: "present" | "absent";
  /** Username for API authentication. */
  username?: string;
  /** When the ETag Validation is enabled, the request is conditionally processed only if the current ETag for the resource matches the ETag provided in the data. */
  validate_etag?: boolean;
}

export interface OneviewFcNetworkReturn {
  /** Has the facts about the managed OneView FC Network. */
  fc_network?: Record<string, unknown>;
}

export const oneview_fc_network = defineModule<OneviewFcNetworkArgs, OneviewFcNetworkReturn>("community.general.oneview_fc_network");
