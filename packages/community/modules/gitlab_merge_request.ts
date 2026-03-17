// Auto-generated from: community.general.gitlab_merge_request
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabMergeRequestArgs {
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
  /** Comma separated list of assignees usernames omitting V(@) character. */
  assignee_ids?: string;
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** A description for the merge request. */
  description?: string;
  /** A path of file containing merge request's description. */
  description_path?: string;
  /** Comma separated list of label names. */
  labels?: string;
  /** The path or name of the project. */
  project: string;
  /** Flag indicating if a merge request should remove the source branch when merging. */
  remove_source_branch?: boolean;
  /** Comma separated list of reviewers usernames omitting V(@) character. */
  reviewer_ids?: string;
  /** Merge request's source branch. */
  source_branch: string;
  /** Create or delete merge request. */
  state?: "present" | "absent";
  /** Filter specifying state of merge requests while searching. */
  state_filter?: "opened" | "closed" | "locked" | "merged";
  /** Merge request's target branch. */
  target_branch: string;
  /** A title for the merge request. */
  title: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabMergeRequestReturn {
  /** API object. */
  mr?: Record<string, unknown>;
  /** Success or failure message. */
  msg?: string;
}

export const gitlab_merge_request = defineModule<GitlabMergeRequestArgs, GitlabMergeRequestReturn>("community.general.gitlab_merge_request");
