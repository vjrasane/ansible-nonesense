// Auto-generated from: community.general.bitbucket_pipeline_key_pair
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface BitbucketPipelineKeyPairArgs {
  /** The OAuth consumer key. */
  client_id?: string;
  /** The OAuth consumer secret. */
  client_secret?: string;
  /** The App password. */
  password?: string;
  /** The private key. */
  private_key?: string;
  /** The public key. */
  public_key?: string;
  /** The repository name. */
  repository: string;
  /** Indicates desired state of the key pair. */
  state: "absent" | "present";
  /** The username. */
  user?: string;
  /** The repository owner. */
  workspace: string;
}

export type BitbucketPipelineKeyPairReturn = Record<string, unknown>;

export const bitbucket_pipeline_key_pair = defineModule<BitbucketPipelineKeyPairArgs, BitbucketPipelineKeyPairReturn>("community.general.bitbucket_pipeline_key_pair");
