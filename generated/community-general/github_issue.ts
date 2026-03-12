// Auto-generated from: community.general.github_issue
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GithubIssueArgs {
  /** Get various details about issue depending upon action specified. */
  action?: "get_status";
  /** Issue number for which information is required. */
  issue: number;
  /** Name of the GitHub organization in which the repository is hosted. */
  organization: string;
  /** Name of repository from which issue needs to be retrieved. */
  repo: string;
}

export interface GithubIssueReturn {
  /** State of the GitHub issue. */
  issue_status?: string;
}

export const github_issue = defineModule<GithubIssueArgs, GithubIssueReturn>("community.general.github_issue");
