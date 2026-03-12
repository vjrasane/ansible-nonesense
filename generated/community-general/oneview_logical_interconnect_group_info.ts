// Auto-generated from: community.general.oneview_logical_interconnect_group_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneviewLogicalInterconnectGroupInfoArgs {
  /** OneView API Version. */
  api_version?: number;
  /** Path to a JSON configuration file containing the OneView client configuration. The configuration file is optional and when used should be present in the host running the ansible commands. If the file path is not provided, the configuration is loaded from environment variables. For links to example configuration files or how to use the environment variables verify the notes section. */
  config?: string;
  /** IP address or hostname for the appliance. */
  hostname?: string;
  /** IP address or hostname for the HPE Image Streamer REST API. */
  image_streamer_hostname?: string;
  /** Logical Interconnect Group name. */
  name?: string;
  /** List of parameters to delimit, filter and sort the list of resources. */
  params?: Record<string, unknown>;
  /** Password for API authentication. */
  password?: string;
  /** Username for API authentication. */
  username?: string;
}

export interface OneviewLogicalInterconnectGroupInfoReturn {
  /** Has all the OneView information about the Logical Interconnect Groups. */
  logical_interconnect_groups?: Record<string, unknown>;
}

export const oneview_logical_interconnect_group_info = defineModule<OneviewLogicalInterconnectGroupInfoArgs, OneviewLogicalInterconnectGroupInfoReturn>("community.general.oneview_logical_interconnect_group_info");
