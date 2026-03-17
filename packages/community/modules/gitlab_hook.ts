// Auto-generated from: community.general.gitlab_hook
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GitlabHookArgs {
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
  /** The URL that you want GitLab to post to, this is used as the primary key for updates and deletion. */
  hook_url: string;
  /** Whether GitLab performs SSL verification when triggering the hook. */
  hook_validate_certs?: boolean;
  /** Trigger hook on issues events. */
  issues_events?: boolean;
  /** Trigger hook on job events. */
  job_events?: boolean;
  /** Trigger hook on merge requests events. */
  merge_requests_events?: boolean;
  /** Trigger hook on note events or when someone adds a comment. */
  note_events?: boolean;
  /** Trigger hook on pipeline events. */
  pipeline_events?: boolean;
  /** ID or Full path of the project in the form of group/name. */
  project: string;
  /** Trigger hook on push events. */
  push_events?: boolean;
  /** Branch name of wildcard to trigger hook on push events. */
  push_events_branch_filter?: string;
  /** Trigger hook on release events. */
  releases_events?: boolean;
  /** When V(present) the hook is updated to match the input or created if it does not exist. */
  state?: "present" | "absent";
  /** Trigger hook on tag push events. */
  tag_push_events?: boolean;
  /** Secret token to validate hook messages at the receiver. */
  token?: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** Trigger hook on wiki events. */
  wiki_page_events?: boolean;
}

export interface GitlabHookReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** API object. */
  hook?: Record<string, unknown>;
  /** Success or failure message. */
  msg?: string;
  /** JSON parsed response from the server. */
  result?: Record<string, unknown>;
}

export const gitlab_hook = defineModule<GitlabHookArgs, GitlabHookReturn>("community.general.gitlab_hook");
