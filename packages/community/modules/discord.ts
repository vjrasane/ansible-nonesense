// Auto-generated from: community.general.discord
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DiscordArgs {
  /** Overrides the default avatar of the webhook. */
  avatar_url?: string;
  /** Content of the message to the Discord channel. */
  content?: string;
  /** Send messages as Embeds to the Discord channel. */
  embeds?: Record<string, unknown> | Record<string, unknown>[];
  /** Set this to V(true) if this is a TTS (Text to Speech) message. */
  tts?: boolean;
  /** Overrides the default username of the webhook. */
  username?: string;
  /** The webhook ID. */
  webhook_id: string;
  /** The webhook token. */
  webhook_token: string;
}

export interface DiscordReturn {
  /** Response Code returned by Discord API. */
  http_code?: number;
}

export const discord = defineModule<DiscordArgs, DiscordReturn>("community.general.discord");
