// Auto-generated from: community.general.gitlab_milestone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabMilestoneArgs {
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
  /** The path of the group. Either this or O(project) is required. */
  group?: string;
  /** A list of dictionaries that represents gitlab project's or group's milestones. */
  milestones?: Record<string, unknown> | Record<string, unknown>[];
  /** The path and name of the project. Either this or O(group) is required. */
  project?: string;
  /** When set to V(true), delete all milestone which are not mentioned in the task. */
  purge?: boolean;
  /** Create or delete milestone. */
  state?: "present" | "absent";
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
}

export interface GitlabMilestoneReturn {
  /** Four lists of the milestones which were added, updated, removed or exist. */
  milestones?: Record<string, unknown>;
  /** API object. */
  milestones_obj?: Record<string, unknown>;
}

export const gitlab_milestone = defineModule<GitlabMilestoneArgs, GitlabMilestoneReturn>("community.general.gitlab_milestone");
