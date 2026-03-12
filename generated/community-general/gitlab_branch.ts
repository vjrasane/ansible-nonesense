// Auto-generated from: community.general.gitlab_branch
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabBranchArgs {
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
  /** The name of the branch that needs to be created. */
  branch: string;
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** The path or name of the project. */
  project: string;
  /** Reference branch to create from. */
  ref_branch?: string;
  /** Create or delete branch. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export type GitlabBranchReturn = Record<string, unknown>;

export const gitlab_branch = defineModule<GitlabBranchArgs, GitlabBranchReturn>("community.general.gitlab_branch");
