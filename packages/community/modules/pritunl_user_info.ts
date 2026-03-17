// Auto-generated from: community.general.pritunl_user_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PritunlUserInfoArgs {
  /** The name of the organization the user is part of. */
  organization: string;
  /** API Secret found in Administrators > USERNAME > API Secret. */
  pritunl_api_secret: string;
  /** API Token of a Pritunl admin user. */
  pritunl_api_token: string;
  /** URL and port of the Pritunl server on which the API is enabled. */
  pritunl_url: string;
  /** Name of the user to filter on Pritunl. */
  user_name?: string;
  /** Type of the user O(user_name). */
  user_type?: "client" | "server";
  /** If certificates should be validated or not. */
  validate_certs?: boolean;
}

export interface PritunlUserInfoReturn {
  /** List of Pritunl users. */
  users?: Record<string, unknown> | Record<string, unknown>[];
}

export const pritunl_user_info = defineModule<PritunlUserInfoArgs, PritunlUserInfoReturn>("community.general.pritunl_user_info");
