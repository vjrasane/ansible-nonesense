// Auto-generated from: community.general.github_deploy_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GithubDeployKeyArgs {
  /** If V(true), forcefully adds the deploy key by deleting any existing deploy key with the same public key or title. */
  force?: boolean;
  /** The base URL of the GitHub API. */
  github_url?: string;
  /** The SSH public key to add to the repository as a deploy key. */
  key: string;
  /** The name for the deploy key. */
  name: string;
  /** The 6 digit One Time Password for 2-Factor Authentication. Required together with O(username) and O(password). */
  otp?: number;
  /** The name of the individual account or organization that owns the GitHub repository. */
  owner: string;
  /** The password to authenticate with. Alternatively, a personal access token can be used instead of O(username) and O(password) combination. */
  password?: string;
  /** If V(true), the deploy key is only able to read repository contents. Otherwise, the deploy key is able to read and write. */
  read_only?: boolean;
  /** The name of the GitHub repository. */
  repo: string;
  /** The state of the deploy key. */
  state?: "present" | "absent";
  /** The OAuth2 token or personal access token to authenticate with. Mutually exclusive with O(password). */
  token?: string;
  /** The username to authenticate with. Should not be set when using personal access token. */
  username?: string;
}

export interface GithubDeployKeyReturn {
  /** The error message returned by the GitHub API. */
  error?: string;
  /** The HTTP status code returned by the GitHub API. */
  http_status_code?: number;
  /** The key identifier assigned by GitHub for the deploy key. */
  id?: number;
  /** The status message describing what occurred. */
  msg?: string;
}

export const github_deploy_key = defineModule<GithubDeployKeyArgs, GithubDeployKeyReturn>("community.general.github_deploy_key");
