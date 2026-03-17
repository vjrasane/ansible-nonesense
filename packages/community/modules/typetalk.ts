// Auto-generated from: community.general.typetalk
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface TypetalkArgs {
  /** OAuth2 client ID. */
  client_id: string;
  /** OAuth2 client secret. */
  client_secret: string;
  /** Message body. */
  msg: string;
  /** Topic ID to post message. */
  topic: number;
}

export type TypetalkReturn = Record<string, unknown>;

export const typetalk = defineModule<TypetalkArgs, TypetalkReturn>("community.general.typetalk");
