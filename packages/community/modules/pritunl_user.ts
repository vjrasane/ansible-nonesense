// Auto-generated from: community.general.pritunl_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PritunlUserArgs {
  /** The name of the organization the user is part of. */
  organization: string;
  /** API Secret found in Administrators > USERNAME > API Secret. */
  pritunl_api_secret: string;
  /** API Token of a Pritunl admin user. */
  pritunl_api_token: string;
  /** URL and port of the Pritunl server on which the API is enabled. */
  pritunl_url: string;
  /** If V(present), the module adds user O(user_name) to the Pritunl O(organization). If V(absent), removes the user O(user_name) from the Pritunl O(organization). */
  state?: "present" | "absent";
  /** Enable/Disable the user O(user_name). */
  user_disabled?: boolean;
  /** Email address associated with the user O(user_name). */
  user_email?: string;
  /** Enable/Disable Gravatar usage for the user O(user_name). */
  user_gravatar?: boolean;
  /** List of groups associated with the user O(user_name). */
  user_groups?: string | string[];
  /** Allowed MAC addresses for the user O(user_name). */
  user_mac_addresses?: string | string[];
  /** Name of the user to create or delete from Pritunl. */
  user_name: string;
  /** Type of the user O(user_name). */
  user_type?: "client" | "server";
  /** If certificates should be validated or not. */
  validate_certs?: boolean;
}

export interface PritunlUserReturn {
  /** JSON representation of Pritunl Users. */
  response?: Record<string, unknown>;
}

export const pritunl_user = defineModule<PritunlUserArgs, PritunlUserReturn>("community.general.pritunl_user");
