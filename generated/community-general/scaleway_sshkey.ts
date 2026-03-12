// Auto-generated from: community.general.scaleway_sshkey
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ScalewaySshkeyArgs {
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
  /** The public SSH key as a string to add. */
  ssh_pub_key: string;
  /** Indicate desired state of the SSH key. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
}

export interface ScalewaySshkeyReturn {
  /** This is only present when O(state=present). */
  data?: Record<string, unknown>;
}

export const scaleway_sshkey = defineModule<ScalewaySshkeyArgs, ScalewaySshkeyReturn>("community.general.scaleway_sshkey");
