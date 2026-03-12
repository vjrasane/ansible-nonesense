// Auto-generated from: community.general.rocketchat
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RocketchatArgs {
  /** Define a list of attachments. */
  attachments?: Record<string, unknown> | Record<string, unknown>[];
  /** Channel to send the message to. If absent, the message goes to the channel selected for the O(token) specified during the creation of webhook. */
  channel?: string;
  /** Allow text to use default colors - use the default of V(normal) to not send a custom color bar at the start of the message. */
  color?: "normal" | "good" | "warning" | "danger";
  /** The domain for your environment without protocol. (For example V(example.com) or V(chat.example.com)). */
  domain: string;
  /** Emoji for the message sender. The representation for the available emojis can be got from Rocket Chat. */
  icon_emoji?: string;
  /** URL for the message sender's icon. */
  icon_url?: string;
  /** If V(true), the payload matches Rocket.Chat prior to 7.4.0 format. This format has been used by the module since its inception, but is no longer supported by Rocket.Chat 7.4.0. */
  is_pre740?: boolean;
  /** Automatically create links for channels and usernames in O(msg). */
  link_names?: number;
  /** Message to be sent. */
  msg?: string;
  /** Specify the protocol used to send notification messages before the webhook URL (that is, V(http) or V(https)). */
  protocol?: "http" | "https";
  /** Rocket Chat Incoming Webhook integration token. This provides authentication to Rocket Chat's Incoming webhook for posting messages. */
  token: string;
  /** This is the sender of the message. */
  username?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type RocketchatReturn = Record<string, unknown>;

export const rocketchat = defineModule<RocketchatArgs, RocketchatReturn>("community.general.rocketchat");
