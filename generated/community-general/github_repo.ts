// Auto-generated from: community.general.github_repo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GithubRepoArgs {
  /** Token parameter for authentication. */
  access_token?: string;
  /** URL to the GitHub API if not using github.com but you own instance. */
  api_url?: string;
  /** Description for the repository. */
  description?: string;
  /** If V(true), overwrite current O(description) and O(private) attributes with defaults. */
  force_defaults?: boolean;
  /** Repository name. */
  name: string;
  /** Organization for the repository. */
  organization?: string;
  /** Password used for authentication. */
  password?: string;
  /** Whether the repository should be private or not. */
  private?: boolean;
  /** Whether the repository should exist or not. */
  state?: "absent" | "present";
  /** Username used for authentication. */
  username?: string;
}

export interface GithubRepoReturn {
  /** Repository information as JSON. See U(https://docs.github.com/en/rest/reference/repos#get-a-repository). */
  repo?: Record<string, unknown>;
}

export const github_repo = defineModule<GithubRepoArgs, GithubRepoReturn>("community.general.github_repo");
