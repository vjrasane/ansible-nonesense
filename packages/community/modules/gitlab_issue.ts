// Auto-generated from: community.general.gitlab_issue
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabIssueArgs {
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
  /** A list of assignee usernames omitting V(@) character. */
  assignee_ids?: string | string[];
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** A description of the issue. */
  description?: string;
  /** A path of file containing issue's description. */
  description_path?: string;
  /** Type of the issue. */
  issue_type?: "issue" | "incident" | "test_case";
  /** A list of label names. */
  labels?: string | string[];
  /** The path or numeric ID of the group hosting desired milestone. */
  milestone_group_id?: string;
  /** The name of the milestone. */
  milestone_search?: string;
  /** The path or name of the project. */
  project: string;
  /** Create or delete issue. */
  state?: "present" | "absent";
  /** Filter specifying state of issues while searching. */
  state_filter?: "opened" | "closed";
  /** A title for the issue. The title is used as a unique identifier to ensure idempotency. */
  title: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabIssueReturn {
  /** API object. */
  issue?: Record<string, unknown>;
  /** Success or failure message. */
  msg?: string;
}

export const gitlab_issue = defineModule<GitlabIssueArgs, GitlabIssueReturn>("community.general.gitlab_issue");
