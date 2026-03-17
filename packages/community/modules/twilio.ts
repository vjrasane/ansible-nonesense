// Auto-generated from: community.general.twilio
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface TwilioArgs {
  /** User's Twilio account token found on the account page. */
  account_sid: string;
  /** User's Twilio authentication token. */
  auth_token: string;
  /** The Twilio number to send the text message from, format C(+15551112222). */
  from_number: string;
  /** A URL with a picture, video or sound clip to send with an MMS (multimedia message) instead of a plain SMS. */
  media_url?: string;
  /** The body of the text message. */
  msg: string;
  /** One or more phone numbers to send the text message to, format C(+15551112222). */
  to_numbers: string | string[];
}

export type TwilioReturn = Record<string, unknown>;

export const twilio = defineModule<TwilioArgs, TwilioReturn>("community.general.twilio");
