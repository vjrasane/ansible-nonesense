// Auto-generated from: community.general.gitlab_runner
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabRunnerArgs {
  /** Determines if a runner can pick up jobs only from protected branches. */
  access_level?: "not_protected" | "ref_protected";
  /** Whether the runner should be registered with an access level or not. */
  access_level_on_creation?: boolean;
  /** Define if the runners is immediately active after creation. */
  active?: boolean;
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
  /** The unique name of the runner. */
  description: string;
  /** ID or full path of the group in the form group/subgroup. */
  group?: string;
  /** Determines if the runner is locked or not. */
  locked?: boolean;
  /** The maximum time that a runner has to complete a specific job. */
  maximum_timeout?: number;
  /** Searches only runners available to the user when searching for existing, when false admin token required. */
  owned?: boolean;
  /** Define if the runners is active or paused after creation. */
  paused?: boolean;
  /** ID or full path of the project in the form of group/name. */
  project?: string;
  /** The registration token is used to register new runners before GitLab 16.0. */
  registration_token?: string;
  /** Run untagged jobs or not. */
  run_untagged?: boolean;
  /** Make sure that the runner with the same name exists with the same configuration or delete the runner with the same name. */
  state?: "present" | "absent";
  /** The tags that apply to the runner. */
  tag_list?: string | string[];
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabRunnerReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** Success or failure message. */
  msg?: string;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
  /** API object. */
  runner?: Record<string, unknown>;
}

export const gitlab_runner = defineModule<GitlabRunnerArgs, GitlabRunnerReturn>("community.general.gitlab_runner");
