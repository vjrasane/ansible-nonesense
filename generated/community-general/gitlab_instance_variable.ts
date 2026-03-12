// Auto-generated from: community.general.gitlab_instance_variable
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabInstanceVariableArgs {
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
  /** When set to V(true), delete all variables which are not mentioned in the task. */
  purge?: boolean;
  /** Create or delete instance variable. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** A list of dictionaries that represents CI/CD variables. */
  variables?: Record<string, unknown> | Record<string, unknown>[];
}

export interface GitlabInstanceVariableReturn {
  /** Four lists of the variablenames which were added, updated, removed or exist. */
  instance_variable?: Record<string, unknown>;
}

export const gitlab_instance_variable = defineModule<GitlabInstanceVariableArgs, GitlabInstanceVariableReturn>("community.general.gitlab_instance_variable");
