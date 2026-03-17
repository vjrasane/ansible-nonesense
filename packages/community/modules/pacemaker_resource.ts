// Auto-generated from: community.general.pacemaker_resource
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PacemakerResourceArgs {
  /** Specify the resource name to create or clone to. */
  name?: string;
  /** Action to associate with resource. */
  resource_argument?: {
    argument_action?: "clone" | "master" | "group" | "promotable";
    argument_option?: string | string[];
  };
  /** List of clone resource IDs to clone from. */
  resource_clone_ids?: string | string[];
  /** List of metadata to associate with clone resource. */
  resource_clone_meta?: string | string[];
  /** List of meta to associate with resource. */
  resource_meta?: string | string[];
  /** List of operations to associate with resource. */
  resource_operation?: Record<string, unknown> | Record<string, unknown>[];
  /** Specify the resource option to create. */
  resource_option?: string | string[];
  /** Resource type to create. */
  resource_type?: {
    resource_name?: string;
    resource_provider?: string;
    resource_standard?: string;
  };
  /** Indicate desired state for cluster resource. */
  state?: "present" | "absent" | "cloned" | "enabled" | "disabled" | "cleanup";
  /** Timeout period for polling the resource creation. */
  wait?: number;
}

export interface PacemakerResourceReturn {
  /** The cluster resource output message. */
  cluster_resources?: string;
}

export const pacemaker_resource = defineModule<PacemakerResourceArgs, PacemakerResourceReturn>("community.general.pacemaker_resource");
