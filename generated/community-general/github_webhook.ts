// Auto-generated from: community.general.github_webhook
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GithubWebhookArgs {
  /** Whether or not the hook is active. */
  active?: boolean;
  /** The media type used to serialize the payloads. */
  content_type?: "form" | "json";
  /** A list of GitHub events the hook is triggered for. Events are listed at U(https://developer.github.com/v3/activity/events/types/). Required unless O(state=absent). */
  events?: string | string[];
  /** Base URL of the GitHub API. */
  github_url?: string;
  /** Flag to indicate that GitHub should skip SSL verification when calling the hook. */
  insecure_ssl?: boolean;
  /** Password to authenticate to GitHub with. */
  password?: string;
  /** Full name of the repository to configure a hook for. */
  repository: string;
  /** The shared secret between GitHub and the payload URL. */
  secret?: string;
  /** Whether the hook should be present or absent. */
  state?: "absent" | "present";
  /** Token to authenticate to GitHub with. */
  token?: string;
  /** URL to which payloads are delivered. */
  url: string;
  /** User to authenticate to GitHub as. */
  user: string;
}

export interface GithubWebhookReturn {
  /** The GitHub ID of the hook created/updated. */
  hook_id?: number;
}

export const github_webhook = defineModule<GithubWebhookArgs, GithubWebhookReturn>("community.general.github_webhook");
