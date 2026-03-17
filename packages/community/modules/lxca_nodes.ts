// Auto-generated from: community.general.lxca_nodes
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LxcaNodesArgs {
  /** Lxca HTTPS full web address. */
  auth_url: string;
  /** UUID of chassis, this is string with length greater than 16. */
  chassis?: string;
  /** Options to filter nodes information. */
  command_options?: "nodes" | "nodes_by_uuid" | "nodes_by_chassis_uuid" | "nodes_status_managed" | "nodes_status_unmanaged";
  /** The password for use in HTTP basic authentication. */
  login_password: string;
  /** The username for use in HTTP basic authentication. */
  login_user: string;
  /** UUID of device, this is string with length greater than 16. */
  uuid?: string;
}

export interface LxcaNodesReturn {
  /** Nodes detail from lxca. */
  result?: Record<string, unknown>;
}

export const lxca_nodes = defineModule<LxcaNodesArgs, LxcaNodesReturn>("community.general.lxca_nodes");
