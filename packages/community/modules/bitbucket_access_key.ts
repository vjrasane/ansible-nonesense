// Auto-generated from: community.general.bitbucket_access_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BitbucketAccessKeyArgs {
  /** The OAuth consumer key. */
  client_id?: string;
  /** The OAuth consumer secret. */
  client_secret?: string;
  /** The SSH public key. */
  key?: string;
  /** The key label. */
  label: string;
  /** The App password. */
  password?: string;
  /** The repository name. */
  repository: string;
  /** Indicates desired state of the access key. */
  state: "absent" | "present";
  /** The username. */
  user?: string;
  /** The repository owner. */
  workspace: string;
}

export type BitbucketAccessKeyReturn = Record<string, unknown>;

export const bitbucket_access_key = defineModule<BitbucketAccessKeyArgs, BitbucketAccessKeyReturn>("community.general.bitbucket_access_key");
