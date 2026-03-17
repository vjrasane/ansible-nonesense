// Auto-generated from: community.general.catapult
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CatapultArgs {
  /** API Secret from API account page. */
  api_secret: string;
  /** API Token from API account page. */
  api_token: string;
  /** The phone number or numbers the message should be sent to (must be in E.164 format, like V(+19195551212)). */
  dest: string | string[];
  /** For MMS messages, a media URL to the location of the media to be sent with the message. */
  media?: string;
  /** The contents of the text message (must be 2048 characters or less). */
  msg: string;
  /** One of your catapult telephone numbers the message should come from (must be in E.164 format, like V(+19195551212)). */
  src: string;
  /** User ID from API account page. */
  user_id: string;
}

export type CatapultReturn = Record<string, unknown>;

export const catapult = defineModule<CatapultArgs, CatapultReturn>("community.general.catapult");
