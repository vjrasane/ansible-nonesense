// Auto-generated from: community.general.gitlab_group_variable
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabGroupVariableArgs {
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
  /** The path and name of the group. */
  group: string;
  /** When set to V(true), delete all variables which are not untouched in the task. */
  purge?: boolean;
  /** Create or delete group variable. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** A list of dictionaries that represents CI/CD variables. */
  variables?: Record<string, unknown> | Record<string, unknown>[];
  /** When the list element is a simple key-value pair, C(masked), C(hidden), C(raw), and C(protected) are set to V(false). */
  vars?: Record<string, unknown>;
}

export interface GitlabGroupVariableReturn {
  /** Four lists of the variablenames which were added, updated, removed or exist. */
  group_variable?: Record<string, unknown>;
}

export const gitlab_group_variable = defineModule<GitlabGroupVariableArgs, GitlabGroupVariableReturn>("community.general.gitlab_group_variable");
