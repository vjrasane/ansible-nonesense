// Auto-generated from: community.general.pacemaker_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export type PacemakerInfoArgs = Record<string, unknown>;

export interface PacemakerInfoReturn {
  /** Cluster information such as the name, UUID, and nodes. */
  cluster_info?: Record<string, unknown>;
  /** All cluster resource constraints on the cluster. */
  constraint_info?: Record<string, unknown>;
  /** All properties present on the cluster. */
  property_info?: Record<string, unknown>;
  /** All resources available on the cluster and their status. */
  resource_info?: Record<string, unknown>;
  /** All STONITH information on the cluster. */
  stonith_info?: Record<string, unknown>;
  /** Pacemaker CLI version */
  version?: string;
}

export const pacemaker_info = defineModule<PacemakerInfoArgs, PacemakerInfoReturn>("community.general.pacemaker_info");
