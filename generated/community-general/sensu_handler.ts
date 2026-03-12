// Auto-generated from: community.general.sensu_handler
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SensuHandlerArgs {
  /** The handler command to be executed. */
  command?: string;
  /** The Sensu event filter (name) to use when filtering events for the handler. */
  filter?: string;
  /** An array of Sensu event filters (names) to use when filtering events for the handler. */
  filters?: string | string[];
  /** If events in the flapping state should be handled. */
  handle_flapping?: boolean;
  /** If events matching one or more silence entries should be handled. */
  handle_silenced?: boolean;
  /** An array of Sensu event handlers (names) to use for events using the handler set. */
  handlers?: string | string[];
  /** The Sensu event mutator (name) to use to mutate event data for the handler. */
  mutator?: string;
  /** A unique name for the handler. The name cannot contain special characters or spaces. */
  name: string;
  /** The pipe definition scope, used to configure the Sensu transport pipe. */
  pipe?: Record<string, unknown>;
  /** An array of check result severities the handler handles. */
  severities?: string | string[];
  /** The socket definition scope, used to configure the TCP/UDP handler socket. */
  socket?: Record<string, unknown>;
  /** Whether the handler should be present or not. */
  state?: "present" | "absent";
  /** The handler execution duration timeout in seconds (hard stop). */
  timeout?: number;
  /** The handler type. */
  type?: "pipe" | "tcp" | "udp" | "transport" | "set";
}

export interface SensuHandlerReturn {
  /** Effective handler configuration, when state is present. */
  config?: Record<string, unknown>;
  /** Path to the handler configuration file. */
  file?: string;
  /** Name of the handler. */
  name?: string;
}

export const sensu_handler = defineModule<SensuHandlerArgs, SensuHandlerReturn>("community.general.sensu_handler");
