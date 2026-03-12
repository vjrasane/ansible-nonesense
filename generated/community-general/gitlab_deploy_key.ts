// Auto-generated from: community.general.gitlab_deploy_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabDeployKeyArgs {
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
  /** Whether this key can push to the project. */
  can_push?: boolean;
  /** Deploy key. */
  key: string;
  /** ID or Full path of project in the form of group/name. */
  project: string;
  /** When V(present) the deploy key is added to the project if it does not exist. */
  state?: "present" | "absent";
  /** Deploy key's title. */
  title: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabDeployKeyReturn {
  /** API object. */
  deploy_key?: Record<string, unknown>;
  /** The error message returned by the GitLab API. */
  error?: string;
  /** Success or failure message. */
  msg?: string;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
}

export const gitlab_deploy_key = defineModule<GitlabDeployKeyArgs, GitlabDeployKeyReturn>("community.general.gitlab_deploy_key");
