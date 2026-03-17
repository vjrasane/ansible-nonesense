// Auto-generated from: ansible.builtin.meta
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MetaArgs {
  /** This module takes a free form command, as a string. There is not an actual option named "free form".  See the examples! */
  free_form: "clear_facts" | "clear_host_errors" | "end_host" | "end_play" | "flush_handlers" | "noop" | "refresh_inventory" | "reset_connection" | "end_batch" | "end_role";
}

export type MetaReturn = Record<string, unknown>;

export const meta = defineModule<MetaArgs, MetaReturn>("ansible.builtin.meta");
