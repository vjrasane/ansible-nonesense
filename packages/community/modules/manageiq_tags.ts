// Auto-generated from: community.general.manageiq_tags
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ManageiqTagsArgs {
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** The ID of the resource at which tags are controlled. */
  resource_id?: number;
  /** The name of the resource at which tags are be controlled. */
  resource_name?: string;
  /** The relevant resource type in manageiq. */
  resource_type: "provider" | "host" | "vm" | "blueprint" | "category" | "cluster" | "data store" | "group" | "resource pool" | "service" | "service template" | "template" | "tenant" | "user";
  /** V(absent) - tags should not exist, */
  state?: "absent" | "present";
  /** V(tags) - list of dictionaries, each includes C(name) and C(category) keys. */
  tags?: Record<string, unknown> | Record<string, unknown>[];
}

export type ManageiqTagsReturn = Record<string, unknown>;

export const manageiq_tags = defineModule<ManageiqTagsArgs, ManageiqTagsReturn>("community.general.manageiq_tags");
