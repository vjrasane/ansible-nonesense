// Auto-generated from: community.general.one_template
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneTemplateArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** V(user_primary_group) - Resources belonging to the user's primary group. */
  filter?: "user_primary_group" | "user" | "all" | "user_groups";
  /** A O(id) of the template you would like to manage. If not set then a new template is created with the given O(name). */
  id?: number;
  /** A O(name) of the template you would like to manage. If a template with the given name does not exist it is created, otherwise it is managed by this module. */
  name?: string;
  /** V(present) - state that is used to manage the template. */
  state?: "present" | "absent";
  /** A string containing the template contents. */
  template?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Time to wait for the desired state to be reached before timeout, in seconds. */
  wait_timeout?: number;
}

export interface OneTemplateReturn {
  /** Template's group ID. */
  group_id?: number;
  /** Template's group name. */
  group_name?: string;
  /** Template ID. */
  id?: number;
  /** Template name. */
  name?: string;
  /** Template's owner ID. */
  owner_id?: number;
  /** Template's owner name. */
  owner_name?: string;
  /** The parsed template. */
  template?: Record<string, unknown>;
}

export const one_template = defineModule<OneTemplateArgs, OneTemplateReturn>("community.general.one_template");
