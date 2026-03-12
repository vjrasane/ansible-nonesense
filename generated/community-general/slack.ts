// Auto-generated from: community.general.slack
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SlackArgs {
  /** Define a list of attachments. This list mirrors the Slack JSON API. */
  attachments?: Record<string, unknown> | Record<string, unknown>[];
  /** Define a list of blocks. This list mirrors the Slack JSON API. */
  blocks?: Record<string, unknown> | Record<string, unknown>[];
  /** Channel to send the message to. If absent, the message goes to the channel selected for the O(token). */
  channel?: string;
  /** Allow text to use default colors - use the default of V(normal) to not send a custom color bar at the start of the message. */
  color?: string;
  /** When using new format 'Webhook token' and WebAPI tokens: this can be V(slack.com) or V(slack-gov.com) and is ignored otherwise. */
  domain?: string;
  /** Emoji for the message sender. See Slack documentation for options. */
  icon_emoji?: string;
  /** URL for the message sender's icon. */
  icon_url?: string;
  /** Automatically create links for channels and usernames in O(msg). */
  link_names?: number;
  /** Optional. Message ID to edit, instead of posting a new message. */
  message_id?: string;
  /** Message to send. Note that the module does not handle escaping characters. Plain-text angle brackets and ampersands should be converted to HTML entities (for example C(&) to C(&amp;)) before sending. See Slack's documentation (U(https://api.slack.com/docs/message-formatting)) for more. */
  msg?: string;
  /** Setting for the message parser at Slack. */
  parse?: "full" | "none";
  /** Setting for automatically prepending a V(#) symbol on the passed in O(channel). */
  prepend_hash?: "always" | "never" | "auto";
  /** Optional. Timestamp of parent message to thread this message, see U(https://api.slack.com/docs/message-threading). */
  thread_id?: string;
  /** Slack integration token. This authenticates you to the Slack service. Make sure to use the correct type of token, depending on what method you use. */
  token: string;
  /** This is the sender of the message. */
  username?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type SlackReturn = Record<string, unknown>;

export const slack = defineModule<SlackArgs, SlackReturn>("community.general.slack");
