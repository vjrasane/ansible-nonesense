// Auto-generated from: community.general.scaleway_organization_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewayOrganizationInfoArgs {
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
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewayOrganizationInfoReturn {
  /** Response from Scaleway API. */
  scaleway_organization_info?: Record<string, unknown> | Record<string, unknown>[];
}

export const scaleway_organization_info = defineModule<ScalewayOrganizationInfoArgs, ScalewayOrganizationInfoReturn>("community.general.scaleway_organization_info");
