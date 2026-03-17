// Auto-generated from: community.general.sendgrid
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SendgridArgs {
  /** Sendgrid API key to use instead of username/password. */
  api_key?: string;
  /** A list of relative or explicit paths of files you want to attach (7MB limit as per SendGrid docs). */
  attachments?: string | string[];
  /** A list of email addresses to bcc. */
  bcc?: string | string[];
  /** The e-mail body content. */
  body: string;
  /** A list of email addresses to cc. */
  cc?: string | string[];
  /** The address in the "from" field for the email. */
  from_address: string;
  /** The name you want to appear in the from field, for example V(John Doe). */
  from_name?: string;
  /** A dict to pass on as headers. */
  headers?: Record<string, unknown>;
  /** Whether the body is HTML content that should be rendered. */
  html_body?: boolean;
  /** Password that corresponds to the username. */
  password?: string;
  /** The desired subject for the email. */
  subject: string;
  /** A list with one or more recipient email addresses. */
  to_addresses: string | string[];
  /** Username for logging into the SendGrid account. */
  username?: string;
}

export type SendgridReturn = Record<string, unknown>;

export const sendgrid = defineModule<SendgridArgs, SendgridReturn>("community.general.sendgrid");
