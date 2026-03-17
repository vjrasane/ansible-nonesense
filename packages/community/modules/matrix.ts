// Auto-generated from: community.general.matrix
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MatrixArgs {
  /** URL of the homeserver, where the CS-API is reachable. */
  hs_url: string;
  /** HTML form of the message to send to matrix. */
  msg_html: string;
  /** Plain text form of the message to send to matrix, usually markdown. */
  msg_plain: string;
  /** The password to log in with. */
  password?: string;
  /** ID of the room to send the notification to. */
  room_id: string;
  /** Authentication token for the API call. If provided, O(user_id) and O(password) are not required. */
  token?: string;
  /** The user ID of the user. */
  user_id?: string;
}

export type MatrixReturn = Record<string, unknown>;

export const matrix = defineModule<MatrixArgs, MatrixReturn>("community.general.matrix");
