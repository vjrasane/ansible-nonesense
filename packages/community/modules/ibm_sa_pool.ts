// Auto-generated from: community.general.ibm_sa_pool
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IbmSaPoolArgs {
  /** Adds the pool to the specified domain. */
  domain?: string;
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** Assigns a perf_class to the pool. */
  perf_class?: string;
  /** Pool name. */
  pool: string;
  /** Pool size in GB. */
  size?: string;
  /** Pool snapshot size in GB. */
  snapshot_size?: string;
  /** Pool state. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
}

export type IbmSaPoolReturn = Record<string, unknown>;

export const ibm_sa_pool = defineModule<IbmSaPoolArgs, IbmSaPoolReturn>("community.general.ibm_sa_pool");
