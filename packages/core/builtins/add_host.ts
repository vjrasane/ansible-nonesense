// Auto-generated from: ansible.builtin.add_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AddHostArgs {
  /** The groups to add the hostname to. */
  groups?: string | string[];
  /** The hostname/ip of the host to add to the inventory, can include a colon and a port number. */
  name: string;
}

export type AddHostReturn = Record<string, unknown>;

export const add_host = defineModule<AddHostArgs, AddHostReturn>("ansible.builtin.add_host");
