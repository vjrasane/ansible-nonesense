// Auto-generated from: community.general.lxd_project
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LxdProjectArgs {
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** The config for the project (for example V({"features.profiles": "true"})). */
  config?: Record<string, unknown>;
  /** Description of the project. */
  description?: string;
  /** Merge the configuration of the present project with the new desired configuration, instead of replacing it. If configuration is the same after merged, no change is made. */
  merge_project?: boolean;
  /** Name of the project. */
  name: string;
  /** A new name of a project. */
  new_name?: string;
  /** The Unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** Define the state of a project. */
  state?: "present" | "absent";
  /** The client trusted password. */
  trust_password?: string;
  /** The Unix domain socket path or the https URL for the LXD server. */
  url?: string;
}

export interface LxdProjectReturn {
  /** List of actions performed for the project. */
  actions?: string | string[];
  /** The logs of requests and responses. */
  logs?: Record<string, unknown> | Record<string, unknown>[];
  /** The old state of the project. */
  old_state?: string;
}

export const lxd_project = defineModule<LxdProjectArgs, LxdProjectReturn>("community.general.lxd_project");
