// Auto-generated from: community.general.gitlab_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabUserArgs {
  /** The access level to the group. */
  access_level?: "guest" | "reporter" | "developer" | "master" | "maintainer" | "owner";
  /** GitLab CI job token for logging in. */
  api_job_token?: string;
  /** GitLab OAuth token for logging in. */
  api_oauth_token?: string;
  /** The password to use for authentication against the API. */
  api_password?: string;
  /** GitLab access token with API permissions. */
  api_token?: string;
  /** The resolvable endpoint for the API. */
  api_url?: string;
  /** The username to use for authentication against the API. */
  api_username?: string;
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** Require confirmation. */
  confirm?: boolean;
  /** The email that belongs to the user. */
  email?: string;
  /** Define external parameter for this user. */
  external?: boolean;
  /** ID or Full path of parent group in the form of group/name. */
  group?: string;
  /** List of identities to be added/updated for this user. */
  identities?: Record<string, unknown> | Record<string, unknown>[];
  /** Grant admin privileges to the user. */
  isadmin?: boolean;
  /** Name of the user you want to create. */
  name?: string;
  /** Overwrite identities with identities added in this module. */
  overwrite_identities?: boolean;
  /** The password of the user. */
  password?: string;
  /** Whether the user can change its password or not. */
  reset_password?: boolean;
  /** The expiration date of the SSH public key in ISO 8601 format C(YYYY-MM-DDTHH:MM:SSZ). */
  sshkey_expires_at?: string;
  /** The SSH public key itself. */
  sshkey_file?: string;
  /** The name of the SSH public key. */
  sshkey_name?: string;
  /** Create, delete or block a user. */
  state?: "present" | "absent" | "blocked" | "unblocked";
  /** The username of the user. */
  username: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabUserReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** Success or failure message. */
  msg?: string;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
  /** API object. */
  user?: Record<string, unknown>;
}

export const gitlab_user = defineModule<GitlabUserArgs, GitlabUserReturn>("community.general.gitlab_user");
