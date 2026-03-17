// Auto-generated from: community.general.gitlab_project_members
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabProjectMembersArgs {
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
  /** A username or a list of usernames to add to/remove from the GitLab project. */
  gitlab_user?: string | string[];
  /** Provide a list of user to access level mappings. */
  gitlab_users_access?: Record<string, unknown> | Record<string, unknown>[];
  /** The name (or full path) of the GitLab project the member is added to/removed from. */
  project: string;
  /** Adds/remove users of the given access_level to match the given O(gitlab_user)/O(gitlab_users_access) list. If omitted do not purge orphaned members. */
  purge_users?: "guest" | "reporter" | "developer" | "maintainer" | "owner";
  /** State of the member in the project. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export type GitlabProjectMembersReturn = Record<string, unknown>;

export const gitlab_project_members = defineModule<GitlabProjectMembersArgs, GitlabProjectMembersReturn>("community.general.gitlab_project_members");
