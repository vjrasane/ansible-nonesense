// Auto-generated from: community.general.github_webhook_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GithubWebhookInfoArgs {
  /** Base URL of the GitHub API. */
  github_url?: string;
  /** Password to authenticate to GitHub with. */
  password?: string;
  /** Full name of the repository to configure a hook for. */
  repository: string;
  /** Token to authenticate to GitHub with. */
  token?: string;
  /** User to authenticate to GitHub as. */
  user: string;
}

export interface GithubWebhookInfoReturn {
  /** A list of hooks that exist for the repo. */
  hooks?: Record<string, unknown> | Record<string, unknown>[];
}

export const github_webhook_info = defineModule<GithubWebhookInfoArgs, GithubWebhookInfoReturn>("community.general.github_webhook_info");
