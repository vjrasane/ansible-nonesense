// Auto-generated from: community.general.gitlab_protected_branch
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabProtectedBranchArgs {
  /** Whether or not to allow force pushes to the protected branch. */
  allow_force_push?: boolean;
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
  /** Whether or not to require code owner approval to push. */
  code_owner_approval_required?: boolean;
  /** Access levels allowed to merge. */
  merge_access_levels?: "maintainer" | "developer" | "nobody";
  /** The name of the branch that needs to be protected. */
  name: string;
  /** The path and name of the project. */
  project: string;
  /** Access levels allowed to push. */
  push_access_level?: "maintainer" | "developer" | "nobody";
  /** Create or delete protected branch. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export type GitlabProtectedBranchReturn = Record<string, unknown>;

export const gitlab_protected_branch = defineModule<GitlabProtectedBranchArgs, GitlabProtectedBranchReturn>("community.general.gitlab_protected_branch");
