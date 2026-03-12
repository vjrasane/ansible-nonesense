// Auto-generated from: community.general.github_release
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GithubReleaseArgs {
  /** Action to perform. */
  action: "latest_release" | "create_release";
  /** Description of the release when creating a release. */
  body?: string;
  /** Sets if the release is a draft or not. (boolean). */
  draft?: boolean;
  /** Name of release when creating a release. */
  name?: string;
  /** The GitHub account password for the user. Mutually exclusive with O(token). */
  password?: string;
  /** Sets if the release is a prerelease or not. (boolean). */
  prerelease?: boolean;
  /** Repository name. */
  repo: string;
  /** Tag name when creating a release. Required when using O(action=create_release). */
  tag?: string;
  /** Target of release when creating a release. */
  target?: string;
  /** GitHub Personal Access Token for authenticating. Mutually exclusive with O(password). */
  token?: string;
  /** The GitHub account that owns the repository. */
  user: string;
}

export interface GithubReleaseReturn {
  /** Version of the created/latest release. */
  tag?: string;
}

export const github_release = defineModule<GithubReleaseArgs, GithubReleaseReturn>("community.general.github_release");
