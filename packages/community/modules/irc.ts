// Auto-generated from: community.general.irc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IrcArgs {
  /** Channel name. One of O(nick_to) or O(channel) needs to be set. When both are set, the message is sent to both of them. */
  channel?: string;
  /** Text color for the message. */
  color?: "none" | "white" | "black" | "blue" | "green" | "red" | "brown" | "purple" | "orange" | "yellow" | "light_green" | "teal" | "light_cyan" | "light_blue" | "pink" | "gray" | "light_gray";
  /** Channel key. */
  key?: string;
  /** The message body. */
  msg: string;
  /** Nickname to send the message from. May be shortened, depending on server's NICKLEN setting. */
  nick?: string;
  /** A list of nicknames to send the message to. One of O(nick_to) or O(channel) needs to be set. When both are defined, the message is sent to both of them. */
  nick_to?: string | string[];
  /** Designates whether user should part from channel after sending message or not. Useful for when using a mock bot and not wanting join/parts between messages. */
  part?: boolean;
  /** Server password. */
  passwd?: string;
  /** IRC server port number. */
  port?: number;
  /** IRC server name/address. */
  server?: string;
  /** Text style for the message. Note italic does not work on some clients. */
  style?: "bold" | "underline" | "reverse" | "italic" | "none";
  /** Timeout to use while waiting for successful registration and join messages, this is to prevent an endless loop. */
  timeout?: number;
  /** Set the channel topic. */
  topic?: string;
  /** Designates whether TLS/SSL should be used when connecting to the IRC server. */
  use_tls?: boolean;
  /** If set to V(false), the SSL certificates are not validated. */
  validate_certs?: boolean;
}

export type IrcReturn = Record<string, unknown>;

export const irc = defineModule<IrcArgs, IrcReturn>("community.general.irc");
