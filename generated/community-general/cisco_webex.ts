// Auto-generated from: community.general.cisco_webex
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface CiscoWebexArgs {
  /** The message you would like to send. */
  msg: string;
  /** Specifies how you would like the message formatted. */
  msg_type?: "text" | "markdown";
  /** Your personal access token required to validate the Webex Teams API. */
  personal_token: string;
  /** The unique identifier associated with the supplied O(recipient_type). */
  recipient_id: string;
  /** The request parameter you would like to send the message to. */
  recipient_type: "roomId" | "toPersonEmail" | "toPersonId";
}

export interface CiscoWebexReturn {
  /** The Response Message returned by the Webex Teams API. */
  message?: string;
  /** The Response Code returned by the Webex Teams API. */
  status_code?: number;
}

export const cisco_webex = defineModule<CiscoWebexArgs, CiscoWebexReturn>("community.general.cisco_webex");
