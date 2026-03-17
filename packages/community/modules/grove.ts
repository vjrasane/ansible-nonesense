// Auto-generated from: community.general.grove
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface GroveArgs {
  /** Token of the channel to post to. */
  channel_token: string;
  /** Icon for the service. */
  icon_url?: string;
  /** Message content. */
  message_content: string;
  /** Name of the service (displayed as the "user" in the message). */
  service?: string;
  /** Service URL for the web client. */
  url?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type GroveReturn = Record<string, unknown>;

export const grove = defineModule<GroveArgs, GroveReturn>("community.general.grove");
