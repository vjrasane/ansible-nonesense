// Auto-generated from: community.general.listen_ports_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ListenPortsFactsArgs {
  /** Override which command to use for fetching listen ports. */
  command?: "netstat" | "ss";
  /** Show both listening and non-listening sockets (for TCP this means established connections). */
  include_non_listening?: boolean;
}

export interface ListenPortsFactsReturn {
  /** Dictionary containing details of TCP and UDP ports with listening servers. */
  ansible_facts?: unknown;
}

export const listen_ports_facts = defineModule<ListenPortsFactsArgs, ListenPortsFactsReturn>("community.general.listen_ports_facts");
