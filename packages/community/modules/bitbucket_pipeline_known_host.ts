// Auto-generated from: community.general.bitbucket_pipeline_known_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BitbucketPipelineKnownHostArgs {
  /** The OAuth consumer key. */
  client_id?: string;
  /** The OAuth consumer secret. */
  client_secret?: string;
  /** The public key. */
  key?: string;
  /** The FQDN of the known host. */
  name: string;
  /** The App password. */
  password?: string;
  /** The repository name. */
  repository: string;
  /** Indicates desired state of the record. */
  state: "absent" | "present";
  /** The username. */
  user?: string;
  /** The repository owner. */
  workspace: string;
}

export type BitbucketPipelineKnownHostReturn = Record<string, unknown>;

export const bitbucket_pipeline_known_host = defineModule<BitbucketPipelineKnownHostArgs, BitbucketPipelineKnownHostReturn>("community.general.bitbucket_pipeline_known_host");
