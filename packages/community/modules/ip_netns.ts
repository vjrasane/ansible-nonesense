// Auto-generated from: community.general.ip_netns
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpNetnsArgs {
  /** Name of the namespace. */
  name?: string;
  /** Whether the namespace should exist. */
  state?: "present" | "absent";
}

export type IpNetnsReturn = Record<string, unknown>;

export const ip_netns = defineModule<IpNetnsArgs, IpNetnsReturn>("community.general.ip_netns");
