// Auto-generated from: community.general.pushbullet
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PushbulletArgs {
  /** Push bullet API token. */
  api_key: string;
  /** Body of the notification, for example details of the fault you are alerting. */
  body?: string;
  /** The channel TAG you wish to broadcast a push notification, as seen on the "My Channels" > "Edit your channel" at Pushbullet page. */
  channel?: string;
  /** The device NAME you wish to send a push notification, as seen on the Pushbullet main page. */
  device?: string;
  /** Thing you wish to push. */
  push_type?: "note" | "link";
  /** Title of the notification. */
  title: string;
  /** URL field, used when O(push_type=link). */
  url?: string;
}

export type PushbulletReturn = Record<string, unknown>;

export const pushbullet = defineModule<PushbulletArgs, PushbulletReturn>("community.general.pushbullet");
