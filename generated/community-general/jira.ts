// Auto-generated from: community.general.jira
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JiraArgs {
  /** Sets the account identifier for the assignee when O(operation) is V(create), V(transition), or V(edit). */
  account_id?: string;
  /** Sets the assignee when O(operation) is V(create), V(transition), or V(edit). */
  assignee?: string;
  /** Information about the attachment being uploaded. */
  attachment?: {
    content?: string;
    filename: string;
    mimetype?: string;
  };
  /** Client certificate if required. */
  client_cert?: string;
  /** Client certificate key if required. */
  client_key?: string;
  /** The comment text to add. */
  comment?: string;
  /** Used to specify comment comment visibility. */
  comment_visibility?: {
    type: "group" | "role";
    value: string;
  };
  /** The issue description, where appropriate. */
  description?: string;
  /** This is a free-form data structure that can contain arbitrary data. This is passed directly to the JIRA REST API (possibly after merging with other required data, as when passed to create). See examples for more information, and the JIRA REST API for the structure required for various fields. */
  fields?: Record<string, unknown>;
  /** Set issue from which link is created. */
  inwardissue?: string;
  /** An existing issue key to operate on. */
  issue?: string;
  /** The issue type, for issue creation. */
  issuetype?: string;
  /** Query JIRA in JQL Syntax, for example V("CMDB Hostname" = test.example.com). */
  jql?: string;
  /** Set type of link, when action 'link' selected. */
  linktype?: string;
  /** Limit the result of O(operation=search). If no value is specified, the default JIRA limit is used. */
  maxresults?: number;
  /** The operation to perform. */
  operation: "attach" | "comment" | "create" | "edit" | "fetch" | "link" | "search" | "transition" | "update" | "worklog";
  /** Set issue to which link is created. */
  outwardissue?: string;
  /** The password to log-in with. */
  password?: string;
  /** The project for this operation. Required for issue creation. */
  project?: string;
  /** Only used when O(operation) is V(transition), and a bit of a misnomer, it actually refers to the transition name. */
  status?: string;
  /** Only used when O(operation) is V(transition), and refers to the transition ID. */
  status_id?: string;
  /** The issue summary, where appropriate. */
  summary?: string;
  /** Set timeout, in seconds, on requests to JIRA API. */
  timeout?: number;
  /** The personal access token to log-in with. */
  token?: string;
  /** Base URI for the JIRA instance. */
  uri: string;
  /** The username to log-in with. */
  username?: string;
  /** Require valid SSL certificates (set to V(false) if you would like to use self-signed certificates). */
  validate_certs?: boolean;
}

export type JiraReturn = Record<string, unknown>;

export const jira = defineModule<JiraArgs, JiraReturn>("community.general.jira");
