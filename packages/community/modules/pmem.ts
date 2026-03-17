// Auto-generated from: community.general.pmem
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PmemArgs {
  /** Percentage of the total capacity to use in AppDirect Mode (V(0)-V(100)). */
  appdirect?: number;
  /** Create AppDirect capacity that is interleaved any other PMem modules. */
  appdirect_interleaved?: boolean;
  /** Percentage of the total capacity to use in Memory Mode (V(0)-V(100)). */
  memorymode?: number;
  /** This enables to set the configuration for the namespace of the PMem. */
  namespace?: Record<string, unknown> | Record<string, unknown>[];
  /** Enable to append the new namespaces to the system. */
  namespace_append?: boolean;
  /** Percentage of the capacity to reserve (V(0)-V(100)). O(reserved) is not mapped into the system physical address space and is presented as reserved capacity with Show Device and Show Memory Resources Commands. */
  reserved?: number;
  /** This enables to set the configuration for each socket by using the socket ID. */
  socket?: Record<string, unknown> | Record<string, unknown>[];
}

export interface PmemReturn {
  /** Indicates that the system reboot is required to complete the PMem configuration. */
  reboot_required?: boolean;
  /** Shows the value of AppDirect, Memory Mode and Reserved size in bytes. */
  result?: Record<string, unknown> | Record<string, unknown>[];
}

export const pmem = defineModule<PmemArgs, PmemReturn>("community.general.pmem");
