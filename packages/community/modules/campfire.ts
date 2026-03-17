// Auto-generated from: community.general.campfire
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CampfireArgs {
  /** The message body. */
  msg: string;
  /** Send a notification sound before the message. */
  notify?: "56k" | "bell" | "bezos" | "bueller" | "clowntown" | "cottoneyejoe" | "crickets" | "dadgummit" | "dangerzone" | "danielsan" | "deeper" | "drama" | "greatjob" | "greyjoy" | "guarantee" | "heygirl" | "horn" | "horror" | "inconceivable" | "live" | "loggins" | "makeitso" | "noooo" | "nyan" | "ohmy" | "ohyeah" | "pushit" | "rimshot" | "rollout" | "rumble" | "sax" | "secret" | "sexyback" | "story" | "tada" | "tmyk" | "trololo" | "trombone" | "unix" | "vuvuzela" | "what" | "whoomp" | "yeah" | "yodel";
  /** Room number to which the message should be sent. */
  room: string;
  /** The subscription name to use. */
  subscription: string;
  /** API token. */
  token: string;
}

export type CampfireReturn = Record<string, unknown>;

export const campfire = defineModule<CampfireArgs, CampfireReturn>("community.general.campfire");
