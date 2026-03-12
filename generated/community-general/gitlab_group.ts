// Auto-generated from: community.general.gitlab_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GitlabGroupArgs {
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
  /** Default to Auto DevOps pipeline for all projects within this group. */
  auto_devops_enabled?: boolean;
  /** Absolute path image to configure avatar. File size should not exceed 200 kb. */
  avatar_path?: string;
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** All merge requests and commits are made against this branch unless you specify a different one. */
  default_branch?: string;
  /** A description for the group. */
  description?: string;
  /** V(all) means SSH and HTTP(S) is enabled. */
  enabled_git_access_protocol?: "all" | "ssh" | "http";
  /** Force delete group even if projects in it. */
  force_delete?: boolean;
  /** Projects in this group can use Git LFS. */
  lfs_enabled?: boolean;
  /** Enforce GitLab Duo features for all subgroups. */
  lock_duo_features_enabled?: boolean;
  /** Users cannot be added to projects in this group. */
  membership_lock?: boolean;
  /** Group mentions are disabled. */
  mentions_disabled?: boolean;
  /** Name of the group you want to create. */
  name: string;
  /** Allow to create subgroups. */
  parent?: string;
  /** The path of the group you want to create, this is O(api_url)/O(path). */
  path?: string;
  /** Prevent forking outside of the group. */
  prevent_forking_outside_group?: boolean;
  /** Members cannot invite groups outside of this group and its subgroups. */
  prevent_sharing_groups_outside_hierarchy?: boolean;
  /** Determine if developers can create projects in the group. */
  project_creation_level?: "developer" | "maintainer" | "noone";
  /** Users can request access (if visibility is public or internal). */
  request_access_enabled?: boolean;
  /** Require all users in this group to setup two-factor authentication. */
  require_two_factor_authentication?: boolean;
  /** Service account token expiration. */
  service_access_tokens_expiration_enforced?: boolean;
  /** Projects cannot be shared with other groups. */
  share_with_group_lock?: boolean;
  /** Create or delete group. */
  state?: "present" | "absent";
  /** Allowed to create subgroups. */
  subgroup_creation_level?: "maintainer" | "owner";
  /** Delay 2FA enforcement (hours). */
  two_factor_grace_period?: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** Default visibility of the group. */
  visibility?: "private" | "internal" | "public";
  /** V(enabled) means everyone can access the wiki. */
  wiki_access_level?: "enabled" | "private" | "disabled";
}

export interface GitlabGroupReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** API object. */
  group?: Record<string, unknown>;
  /** Success or failure message. */
  msg?: string;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
}

export const gitlab_group = defineModule<GitlabGroupArgs, GitlabGroupReturn>("community.general.gitlab_group");
