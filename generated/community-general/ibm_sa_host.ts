// Auto-generated from: community.general.ibm_sa_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IbmSaHostArgs {
  /** The name of the cluster to include the host. */
  cluster?: string;
  /** The domains the cluster is attached to. To include more than one domain, separate domain names with commas. To include all existing domains, use an asterisk (V(*)). */
  domain?: string;
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Host name. */
  host: string;
  /** The host's CHAP name identifier. */
  iscsi_chap_name?: string;
  /** The password of the initiator used to authenticate to the system when CHAP is enable. */
  iscsi_chap_secret?: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** Host state. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
}

export type IbmSaHostReturn = Record<string, unknown>;

export const ibm_sa_host = defineModule<IbmSaHostArgs, IbmSaHostReturn>("community.general.ibm_sa_host");
