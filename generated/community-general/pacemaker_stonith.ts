// Auto-generated from: community.general.pacemaker_stonith
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PacemakerStonithArgs {
  /** Enabled agent validation for STONITH creation. */
  agent_validation?: boolean;
  /** Specify the STONITH name to create. */
  name: string;
  /** Indicate desired state for cluster STONITH. */
  state?: "present" | "absent" | "enabled" | "disabled";
  /** Action to associate with STONITH. */
  stonith_argument?: {
    argument_action?: "group" | "before" | "after";
    argument_options?: string | string[];
  };
  /** List of metadata to associate with STONITH. */
  stonith_metas?: string | string[];
  /** List of operations to associate with STONITH. */
  stonith_operations?: Record<string, unknown> | Record<string, unknown>[];
  /** Specify the STONITH option to create. */
  stonith_options?: string | string[];
  /** Specify the STONITH device type. */
  stonith_type?: string;
  /** Timeout period for polling the STONITH creation. */
  wait?: number;
}

export interface PacemakerStonithReturn {
  /** The value of the STONITH before executing the module. */
  previous_value?: string;
  /** The value of the STONITH after executing the module. */
  value?: string;
}

export const pacemaker_stonith = defineModule<PacemakerStonithArgs, PacemakerStonithReturn>("community.general.pacemaker_stonith");
