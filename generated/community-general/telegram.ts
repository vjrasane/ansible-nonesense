// Auto-generated from: community.general.telegram
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface TelegramArgs {
  /** Any parameters for the method. */
  api_args?: Record<string, unknown>;
  /** Bot API method. */
  api_method?: string;
  /** Token identifying your telegram bot. */
  token: string;
}

export interface TelegramReturn {
  /** The message you attempted to send. */
  msg?: string;
  /** Error message gotten from Telegram API. */
  telegram_error?: string;
}

export const telegram = defineModule<TelegramArgs, TelegramReturn>("community.general.telegram");
