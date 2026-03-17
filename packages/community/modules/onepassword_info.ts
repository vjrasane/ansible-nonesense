// Auto-generated from: community.general.onepassword_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OnepasswordInfoArgs {
  /** A dictionary containing authentication details. If this is set, the module attempts to sign in to 1Password automatically. */
  auto_login?: {
    master_password: string;
    secret_key?: string;
    subdomain?: string;
    username?: string;
  };
  /** Used to specify the exact path to the C(op) command line interface. */
  cli_path?: string;
  /** A list of one or more search terms. */
  search_terms: Record<string, unknown> | Record<string, unknown>[];
}

export interface OnepasswordInfoReturn {
  /** Dictionary of each 1password item matching the given search terms, shows what would be returned from the third example above. */
  onepassword?: Record<string, unknown>;
}

export const onepassword_info = defineModule<OnepasswordInfoArgs, OnepasswordInfoReturn>("community.general.onepassword_info");
