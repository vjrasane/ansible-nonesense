// Auto-generated from: community.general.taiga_issue
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface TaigaIssueArgs {
  /** Path to a file to be attached to the issue. */
  attachment?: string;
  /** A string describing the file to be attached to the issue. */
  attachment_description?: string;
  /** The issue description. */
  description?: string;
  /** The issue type. Must exist previously. */
  issue_type: string;
  /** The issue priority. Must exist previously. */
  priority?: string;
  /** Name of the project containing the issue. Must exist previously. */
  project: string;
  /** The issue severity. Must exist previously. */
  severity?: string;
  /** Whether the issue should be present or not. */
  state?: "present" | "absent";
  /** The issue status. Must exist previously. */
  status?: string;
  /** The issue subject. */
  subject: string;
  /** A lists of tags to be assigned to the issue. */
  tags?: string | string[];
  /** The hostname of the Taiga instance. */
  taiga_host?: string;
}

export type TaigaIssueReturn = Record<string, unknown>;

export const taiga_issue = defineModule<TaigaIssueArgs, TaigaIssueReturn>("community.general.taiga_issue");
