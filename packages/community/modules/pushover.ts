// Auto-generated from: community.general.pushover
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PushoverArgs {
  /** Pushover issued token identifying your pushover app. */
  app_token: string;
  /** A device the message should be sent to. Multiple devices can be specified, separated by a comma. */
  device?: string;
  /** What message you wish to send. */
  msg: string;
  /** Message priority (see U(https://pushover.net) for details). */
  pri?: "-2" | "-1" | "0" | "1" | "2";
  /** Message title. */
  title?: string;
  /** Pushover issued authentication key for your user. */
  user_key: string;
}

export type PushoverReturn = Record<string, unknown>;

export const pushover = defineModule<PushoverArgs, PushoverReturn>("community.general.pushover");
