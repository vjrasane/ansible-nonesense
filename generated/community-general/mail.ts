// Auto-generated from: community.general.mail
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MailArgs {
  /** A list of pathnames of files to attach to the message. */
  attach?: string | string[];
  /** The email-address(es) the mail is being 'blind' copied to. */
  bcc?: string | string[];
  /** The body of the email being sent. */
  body?: string;
  /** The email-address(es) the mail is being copied to. */
  cc?: string | string[];
  /** The character set of email being sent. */
  charset?: string;
  /** Allows for manual specification of host for EHLO. */
  ehlohost?: string;
  /** A list of headers which should be added to the message. */
  headers?: string | string[];
  /** The mail server. */
  host?: string;
  /** The domain name to use for the L(Message-ID header, https://en.wikipedia.org/wiki/Message-ID). */
  message_id_domain?: string;
  /** If SMTP requires password. */
  password?: string;
  /** The mail server port. */
  port?: number;
  /** If V(always), the connection only sends email if the connection is Encrypted. If the server does not accept the encrypted connection it fails. */
  secure?: "always" | "never" | "starttls" | "try";
  /** The email-address the mail is sent from. May contain address and phrase. */
  sender?: string;
  /** The subject of the email being sent. */
  subject: string;
  /** The minor mime type, can be either V(plain) or V(html). */
  subtype?: "html" | "plain";
  /** Sets the timeout in seconds for connection attempts. */
  timeout?: number;
  /** The email-address(es) the mail is being sent to. */
  to?: string | string[];
  /** If SMTP requires username. */
  username?: string;
}

export type MailReturn = Record<string, unknown>;

export const mail = defineModule<MailArgs, MailReturn>("community.general.mail");
