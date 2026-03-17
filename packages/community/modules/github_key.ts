// Auto-generated from: community.general.github_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GithubKeyArgs {
  /** URL to the GitHub API if not using github.com but your own GitHub Enterprise instance. */
  api_url?: string;
  /** The default is V(true), which replaces the existing remote key if it is different than O(pubkey). If V(false), the key is only set if no key with the given O(name) exists. */
  force?: boolean;
  /** SSH key name. */
  name: string;
  /** SSH public key value. Required when O(state=present). */
  pubkey?: string;
  /** Whether to remove a key, ensure that it exists, or update its value. */
  state?: "present" | "absent";
  /** GitHub Access Token with permission to list and create public keys. */
  token: string;
}

export interface GithubKeyReturn {
  /** An array of key objects that were deleted. Only present on state=absent. */
  deleted_keys?: string | string[];
  /** Metadata about the key just created. Only present on state=present. */
  key?: Record<string, unknown>;
  /** An array of keys matching the specified name. Only present on state=present. */
  matching_keys?: string | string[];
}

export const github_key = defineModule<GithubKeyArgs, GithubKeyReturn>("community.general.github_key");
