// Auto-generated from: community.general.gitlab_project_badge
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabProjectBadgeArgs {
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
  /** The image URL of the badge. */
  image_url: string;
  /** The URL associated with the badge. */
  link_url: string;
  /** The name (or full path) of the GitLab project the badge is added to/removed from. */
  project: string;
  /** State of the badge in the project. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabProjectBadgeReturn {
  /** The badge information. */
  badge?: Record<string, unknown>;
}

export const gitlab_project_badge = defineModule<GitlabProjectBadgeArgs, GitlabProjectBadgeReturn>("community.general.gitlab_project_badge");
