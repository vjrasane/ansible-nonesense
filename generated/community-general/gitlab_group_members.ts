// Auto-generated from: community.general.gitlab_group_members
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabGroupMembersArgs {
  /** The access level for the user. */
  access_level?: "guest" | "reporter" | "developer" | "maintainer" | "owner";
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
  /** The C(full_path) of the GitLab group the member is added to/removed from. */
  gitlab_group: string;
  /** A username or a list of usernames to add to/remove from the GitLab group. */
  gitlab_user?: string | string[];
  /** Provide a list of user to access level mappings. */
  gitlab_users_access?: Record<string, unknown> | Record<string, unknown>[];
  /** Adds/remove users of the given access_level to match the given O(gitlab_user)/O(gitlab_users_access) list. If omitted do not purge orphaned members. */
  purge_users?: "guest" | "reporter" | "developer" | "maintainer" | "owner";
  /** State of the member in the group. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export type GitlabGroupMembersReturn = Record<string, unknown>;

export const gitlab_group_members = defineModule<GitlabGroupMembersArgs, GitlabGroupMembersReturn>("community.general.gitlab_group_members");
