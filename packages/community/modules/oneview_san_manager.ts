// Auto-generated from: community.general.oneview_san_manager
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneviewSanManagerArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** List with SAN Manager properties. */
  data: Record<string, unknown>;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Password for API authentication. */
  password?: string;
  /** Indicates the desired state for the Uplink Set resource. */
  state?: "present" | "absent" | "connection_information_set";
  /** Username for API authentication. */
  username?: string;
  /** When the ETag Validation is enabled, the request is conditionally processed only if the current ETag for the resource matches the ETag provided in the data. */
  validate_etag?: boolean;
}

export interface OneviewSanManagerReturn {
  /** Has the OneView facts about the SAN Manager. */
  san_manager?: Record<string, unknown>;
}

export const oneview_san_manager = defineModule<OneviewSanManagerArgs, OneviewSanManagerReturn>("community.general.oneview_san_manager");
