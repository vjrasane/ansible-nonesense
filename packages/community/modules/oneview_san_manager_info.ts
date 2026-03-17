// Auto-generated from: community.general.oneview_san_manager_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneviewSanManagerInfoArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** List of params to delimit, filter and sort the list of resources. */
  params?: Record<string, unknown>;
  /** Password for API authentication. */
  password?: string;
  /** Provider Display Name. */
  provider_display_name?: string;
  /** Username for API authentication. */
  username?: string;
}

export interface OneviewSanManagerInfoReturn {
  /** Has all the OneView information about the SAN Managers. */
  san_managers?: Record<string, unknown>;
}

export const oneview_san_manager_info = defineModule<OneviewSanManagerInfoArgs, OneviewSanManagerInfoReturn>("community.general.oneview_san_manager_info");
