// Auto-generated from: community.general.bitbucket_pipeline_variable
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BitbucketPipelineVariableArgs {
  /** The OAuth consumer key. */
  client_id?: string;
  /** The OAuth consumer secret. */
  client_secret?: string;
  /** The pipeline variable name. */
  name: string;
  /** The App password. */
  password?: string;
  /** The repository name. */
  repository: string;
  /** Whether to encrypt the variable value. */
  secured?: boolean;
  /** Indicates desired state of the variable. */
  state: "absent" | "present";
  /** The username. */
  user?: string;
  /** The pipeline variable value. */
  value?: string;
  /** The repository owner. */
  workspace: string;
}

export type BitbucketPipelineVariableReturn = Record<string, unknown>;

export const bitbucket_pipeline_variable = defineModule<BitbucketPipelineVariableArgs, BitbucketPipelineVariableReturn>("community.general.bitbucket_pipeline_variable");
