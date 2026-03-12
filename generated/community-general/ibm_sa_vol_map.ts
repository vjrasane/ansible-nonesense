// Auto-generated from: community.general.ibm_sa_vol_map
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IbmSaVolMapArgs {
  /** Maps the volume to a cluster. */
  cluster?: string;
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Maps the volume to a host. */
  host?: string;
  /** The LUN identifier. */
  lun?: string;
  /** Overrides the existing volume mapping. */
  override?: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** When the state is present the volume is mapped. When the state is absent, the volume is meant to be unmapped. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
  /** Volume name. */
  vol: string;
}

export type IbmSaVolMapReturn = Record<string, unknown>;

export const ibm_sa_vol_map = defineModule<IbmSaVolMapArgs, IbmSaVolMapReturn>("community.general.ibm_sa_vol_map");
