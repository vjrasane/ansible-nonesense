// Auto-generated from: community.general.jenkins_node
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JenkinsNodeArgs {
  /** When specified, sets the Jenkins node labels. */
  labels?: string | string[];
  /** Name of the Jenkins node to manage. */
  name: string;
  /** When specified, sets the Jenkins node executor count. */
  num_executors?: number;
  /** Specifies the offline reason message to be set when configuring the Jenkins node state. */
  offline_message?: string;
  /** Specifies whether the Jenkins node should be V(present) (created), V(absent) (deleted), V(enabled) (online) or V(disabled) (offline). */
  state?: "enabled" | "disabled" | "present" | "absent";
  /** API token to authenticate with the Jenkins server. */
  token?: string;
  /** URL of the Jenkins server. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
}

export interface JenkinsNodeReturn {
  /** Whether or not the Jenkins node was configured by the task. */
  configured?: boolean;
  /** Whether or not the Jenkins node was created by the task. */
  created?: boolean;
  /** Whether or not the Jenkins node was deleted by the task. */
  deleted?: boolean;
  /** Whether or not the Jenkins node was disabled by the task. */
  disabled?: boolean;
  /** Whether or not the Jenkins node was enabled by the task. */
  enabled?: boolean;
  /** Name of the Jenkins node. */
  name?: string;
  /** State of the Jenkins node. */
  state?: string;
  /** URL used to connect to the Jenkins server. */
  url?: string;
  /** User used for authentication. */
  user?: string;
}

export const jenkins_node = defineModule<JenkinsNodeArgs, JenkinsNodeReturn>("community.general.jenkins_node");
