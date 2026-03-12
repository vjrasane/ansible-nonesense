// Auto-generated from: community.general.gitlab_group_access_token
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabGroupAccessTokenArgs {
  /** Access level of the access token. */
  access_level?: "guest" | "planner" | "reporter" | "developer" | "maintainer" | "owner";
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
  /** Expiration date of the access token in C(YYYY-MM-DD) format. */
  expires_at: string;
  /** ID or full path of group in the form of group/subgroup. */
  group: string;
  /** Access token's name. */
  name: string;
  /** Whether the access token is recreated if it already exists. */
  recreate?: "never" | "always" | "state_change";
  /** Scope of the access token. */
  scopes: "api" | "read_api" | "read_registry" | "write_registry" | "read_virtual_registry" | "write_virtual_registry" | "read_repository" | "write_repository" | "create_runner" | "manage_runner" | "ai_features" | "k8s_proxy" | "self_rotate";
  /** When V(present) the access token is added to the group if it does not exist. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabGroupAccessTokenReturn {
  /** API object. */
  access_token?: Record<string, unknown>;
}

export const gitlab_group_access_token = defineModule<GitlabGroupAccessTokenArgs, GitlabGroupAccessTokenReturn>("community.general.gitlab_group_access_token");
