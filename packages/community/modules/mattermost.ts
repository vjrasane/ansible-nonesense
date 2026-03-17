// Auto-generated from: community.general.mattermost
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MattermostArgs {
  /** Mattermost webhook API key. Log into your Mattermost site, go to Menu -> Integration -> Incoming Webhook -> Add Incoming Webhook. This gives you a full URL. O(api_key) is the last part. U(http://mattermost.example.com/hooks/API_KEY). */
  api_key: string;
  /** Define a list of attachments. */
  attachments?: Record<string, unknown> | Record<string, unknown>[];
  /** Channel to send the message to. If absent, the message goes to the channel selected for the O(api_key). */
  channel?: string;
  /** URL for the message sender's icon. */
  icon_url?: string;
  /** Set a priority for the message. */
  priority?: "important" | "urgent";
  /** Text to send. Note that the module does not handle escaping characters. */
  text?: string;
  /** Mattermost URL (for example V(http://mattermost.yourcompany.com)). */
  url: string;
  /** This is the sender of the message (Username Override need to be enabled by mattermost admin, see mattermost doc). */
  username?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export interface MattermostReturn {
  /** Mattermost payload. */
  payload?: string;
  /** URL the webhook is sent to. */
  webhook_url?: string;
}

export const mattermost = defineModule<MattermostArgs, MattermostReturn>("community.general.mattermost");
