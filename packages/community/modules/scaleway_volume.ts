// Auto-generated from: community.general.scaleway_volume
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayVolumeArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** Name used to identify the volume. */
  name: string;
  /** ScaleWay organization ID to which volume belongs. */
  organization?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Scaleway project ID to which volume belongs. */
  project?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway region to use (for example par1). */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Size of the volume in bytes. */
  size?: number;
  /** Indicate desired state of the volume. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Type of the volume (for example 'l_ssd'). */
  volume_type?: string;
}

export interface ScalewayVolumeReturn {
  /** This is only present when O(state=present). */
  data?: Record<string, unknown>;
}

export const scaleway_volume = defineModule<ScalewayVolumeArgs, ScalewayVolumeReturn>("community.general.scaleway_volume");
