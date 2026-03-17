// Auto-generated from: community.general.ibm_sa_host_ports
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IbmSaHostPortsArgs {
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Fiber channel address. */
  fcaddress?: string;
  /** Host name. */
  host: string;
  /** The iSCSI initiator name. */
  iscsi_name?: string;
  /** Number of visible targets. */
  num_of_visible_targets?: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** Host ports state. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
}

export type IbmSaHostPortsReturn = Record<string, unknown>;

export const ibm_sa_host_ports = defineModule<IbmSaHostPortsArgs, IbmSaHostPortsReturn>("community.general.ibm_sa_host_ports");
