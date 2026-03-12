// Auto-generated from: community.general.gitlab_project
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabProjectArgs {
  /** Allow merge when skipped pipelines exist. */
  allow_merge_on_skipped_pipeline?: boolean;
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
  /** Absolute path image to configure avatar. File size should not exceed 200 kb. */
  avatar_path?: string;
  /** Maximum number of seconds a CI job can run. */
  build_timeout?: number;
  /** V(private) means that repository CI/CD is allowed only to project members. */
  builds_access_level?: "private" | "disabled" | "enabled";
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** Custom path to the CI configuration file for this project. */
  ci_config_path?: string;
  /** Project cleanup policy for its container registry. */
  container_expiration_policy?: {
    cadence?: "1d" | "7d" | "14d" | "1month" | "3month";
    enabled?: boolean;
    keep_n?: number;
    name_regex?: string;
    name_regex_keep?: string;
    older_than?: "0d" | "7d" | "14d" | "30d" | "90d";
  };
  /** V(private) means that container registry is allowed only to project members. */
  container_registry_access_level?: "private" | "disabled" | "enabled";
  /** The default branch name for this project. */
  default_branch?: string;
  /** An description for the project. */
  description?: string;
  /** V(private) means that deployment to environment is allowed only to project members. */
  environments_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that feature rollout is allowed only to project members. */
  feature_flags_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that repository forks is allowed only to project members. */
  forking_access_level?: "private" | "disabled" | "enabled";
  /** ID or the full path of the group of which this projects belongs to. */
  group?: string;
  /** Git repository which is imported into gitlab. */
  import_url?: string;
  /** V(private) means that configuring infrastructure is allowed only to project members. */
  infrastructure_access_level?: "private" | "disabled" | "enabled";
  /** Initializes the project with a default C(README.md). */
  initialize_with_readme?: boolean;
  /** V(private) means that accessing issues tab is allowed only to project members. */
  issues_access_level?: "private" | "disabled" | "enabled";
  /** Whether you want to create issues or not. */
  issues_enabled?: boolean;
  /** Enable Git large file systems to manages large files such as audio, video, and graphics files. */
  lfs_enabled?: boolean;
  /** What requirements are placed upon merges. */
  merge_method?: "ff" | "merge" | "rebase_merge";
  /** If merge requests can be made or not. */
  merge_requests_enabled?: boolean;
  /** V(private) means that accessing model registry tab is allowed only to project members. */
  model_registry_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that monitoring health is allowed only to project members. */
  monitor_access_level?: "private" | "disabled" | "enabled";
  /** The name of the project. */
  name: string;
  /** All discussions on a merge request (MR) have to be resolved. */
  only_allow_merge_if_all_discussions_are_resolved?: boolean;
  /** Only allow merges if pipeline succeeded. */
  only_allow_merge_if_pipeline_succeeds?: boolean;
  /** Enable GitLab package repository. */
  packages_enabled?: boolean;
  /** V(private) means that accessing pages tab is allowed only to project members. */
  pages_access_level?: "private" | "disabled" | "enabled";
  /** The path of the project you want to create, this is server_url/O(group)/O(path). */
  path?: string;
  /** V(private) means that accessing release is allowed only to project members. */
  releases_access_level?: "private" | "disabled" | "enabled";
  /** Remove the source branch after merge. */
  remove_source_branch_after_merge?: boolean;
  /** V(private) means that accessing repository is allowed only to project members. */
  repository_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that accessing security and complicance tab is allowed only to project members. */
  security_and_compliance_access_level?: "private" | "disabled" | "enabled";
  /** Enable Service Desk. */
  service_desk_enabled?: boolean;
  /** Enable shared runners for this project. */
  shared_runners_enabled?: boolean;
  /** If creating snippets should be available or not. */
  snippets_enabled?: boolean;
  /** Squash commits when merging. */
  squash_option?: "never" | "always" | "default_off" | "default_on";
  /** Create or delete project. */
  state?: "present" | "absent";
  /** A topic or list of topics to be assigned to a project. */
  topics?: string | string[];
  /** Used to create a personal project under a user's name. */
  username?: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** V(private) Project access must be granted explicitly for each user. */
  visibility?: "private" | "internal" | "public";
  /** If an wiki for this project should be available or not. */
  wiki_enabled?: boolean;
}

export interface GitlabProjectReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** Success or failure message. */
  msg?: string;
  /** API object. */
  project?: Record<string, unknown>;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
}

export const gitlab_project = defineModule<GitlabProjectArgs, GitlabProjectReturn>("community.general.gitlab_project");
