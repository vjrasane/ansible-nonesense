// Auto-generated from: community.general.jabber
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JabberArgs {
  /** Message encoding. */
  encoding?: string;
  /** Host to connect, overrides user info. */
  host?: string;
  /** The message body. */
  msg: string;
  /** Password for user to connect. */
  password: string;
  /** Port to connect to, overrides default. */
  port?: number;
  /** User ID or name of the room, when using room use a slash to indicate your nick. */
  to: string;
  /** User as which to connect. */
  user: string;
}

export type JabberReturn = Record<string, unknown>;

export const jabber = defineModule<JabberArgs, JabberReturn>("community.general.jabber");
