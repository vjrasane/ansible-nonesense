// Auto-generated from: community.general.pubnub_blocks
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PubnubBlocksArgs {
  /** Name of PubNub account for from which O(application) is used to manage blocks. */
  account?: string;
  /** Name of target PubNub application for which blocks configuration on specific O(keyset) is done. */
  application: string;
  /** In case if single play use blocks management module few times it is preferred to enabled 'caching' by making previous module to share gathered artifacts and pass them to this parameter. */
  cache?: Record<string, unknown>;
  /** List of fields which should be changed by block itself (does not affect any event handlers). */
  changes?: Record<string, unknown>;
  /** Short block description which is later visible on U(https://admin.pubnub.com). */
  description?: string;
  /** Email from account for which new session should be started. */
  email?: string;
  /** List of event handlers which should be updated for specified block O(name). */
  event_handlers?: Record<string, unknown> | Record<string, unknown>[];
  /** Name of application's keys set which is bound to managed blocks. */
  keyset: string;
  /** Name of managed block which is later visible on admin.pubnub.com. */
  name: string;
  /** Password which match to account to which specified O(email) belong. */
  password?: string;
  /** Intended block state after event handlers creation / update process is completed. */
  state?: "started" | "stopped" | "present" | "absent";
  /** This key allow to try skip certificates check when performing REST API calls. Sometimes host may have issues with certificates on it and this causes problems to call PubNub REST API. */
  validate_certs?: boolean;
}

export interface PubnubBlocksReturn {
  /** Cached account information. In case if with single play module used few times it is better to pass cached data to next module calls to speed up process. */
  module_cache?: Record<string, unknown>;
}

export const pubnub_blocks = defineModule<PubnubBlocksArgs, PubnubBlocksReturn>("community.general.pubnub_blocks");
