// Auto-generated from: community.general.ibm_sa_vol
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IbmSaVolArgs {
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** Volume pool. */
  pool?: string;
  /** Volume size. */
  size?: string;
  /** Volume state. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
  /** Volume name. */
  vol: string;
}

export type IbmSaVolReturn = Record<string, unknown>;

export const ibm_sa_vol = defineModule<IbmSaVolArgs, IbmSaVolReturn>("community.general.ibm_sa_vol");
