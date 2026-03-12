// Auto-generated from: community.general.pacemaker_cluster
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PacemakerClusterArgs {
  /** Force the change of the cluster state. */
  force?: boolean;
  /** Specify which node of the cluster you want to manage. V(null) == the cluster status itself, V(all) == check the status of all nodes. */
  name?: string;
  /** Indicate desired state of the cluster. */
  state: "cleanup" | "offline" | "online" | "restart" | "maintenance";
  /** Timeout period (in seconds) for polling the cluster operation. */
  timeout?: number;
}

export interface PacemakerClusterReturn {
  /** The output of the current state of the cluster. It returns a list of the nodes state. */
  out?: string;
}

export const pacemaker_cluster = defineModule<PacemakerClusterArgs, PacemakerClusterReturn>("community.general.pacemaker_cluster");
