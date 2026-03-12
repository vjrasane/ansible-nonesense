// Auto-generated from: community.general.manageiq_tags_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ManageiqTagsInfoArgs {
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
  /** The name of the resource at which tags are controlled. */
  resource_name?: string;
  /** The relevant resource type in ManageIQ. */
  resource_type: "provider" | "host" | "vm" | "blueprint" | "category" | "cluster" | "data store" | "group" | "resource pool" | "service" | "service template" | "template" | "tenant" | "user";
}

export interface ManageiqTagsInfoReturn {
  /** List of tags associated with the resource. */
  tags?: Record<string, unknown> | Record<string, unknown>[];
}

export const manageiq_tags_info = defineModule<ManageiqTagsInfoArgs, ManageiqTagsInfoReturn>("community.general.manageiq_tags_info");
