// Auto-generated from: community.general.pritunl_org_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PritunlOrgInfoArgs {
  /** Name of the Pritunl organization to search for. If none provided, the module returns all Pritunl organizations. */
  organization?: string;
  /** API Secret found in Administrators > USERNAME > API Secret. */
  pritunl_api_secret: string;
  /** API Token of a Pritunl admin user. */
  pritunl_api_token: string;
  /** URL and port of the Pritunl server on which the API is enabled. */
  pritunl_url: string;
  /** If certificates should be validated or not. */
  validate_certs?: boolean;
}

export interface PritunlOrgInfoReturn {
  /** List of Pritunl organizations. */
  organizations?: Record<string, unknown> | Record<string, unknown>[];
}

export const pritunl_org_info = defineModule<PritunlOrgInfoArgs, PritunlOrgInfoReturn>("community.general.pritunl_org_info");
