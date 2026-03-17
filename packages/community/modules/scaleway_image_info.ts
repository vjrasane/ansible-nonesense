// Auto-generated from: community.general.scaleway_image_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ScalewayImageInfoArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Scaleway compute zone. */
  region: "ams1" | "EMEA-NL-EVS" | "ams2" | "ams3" | "par1" | "EMEA-FR-PAR1" | "par2" | "EMEA-FR-PAR2" | "par3" | "waw1" | "EMEA-PL-WAW1" | "waw2" | "waw3";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayImageInfoReturn {
  /** Response from Scaleway API. */
  scaleway_image_info?: Record<string, unknown> | Record<string, unknown>[];
}

export const scaleway_image_info = defineModule<ScalewayImageInfoArgs, ScalewayImageInfoReturn>("community.general.scaleway_image_info");
