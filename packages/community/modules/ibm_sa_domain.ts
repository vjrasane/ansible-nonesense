// Auto-generated from: community.general.ibm_sa_domain
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IbmSaDomainArgs {
  /** Name of the domain to be managed. */
  domain: string;
  /** The hostname or management IP of Spectrum Accelerate storage system. */
  endpoints: string;
  /** Hard capacity of the domain. */
  hard_capacity?: string;
  /** LDAP ID to add to the domain. */
  ldap_id?: string;
  /** Number of max cgs. */
  max_cgs?: string;
  /** Number of max dms. */
  max_dms?: string;
  /** Number of max_mirrors. */
  max_mirrors?: string;
  /** Number of max_pools. */
  max_pools?: string;
  /** Number of max_volumes. */
  max_volumes?: string;
  /** Password for username on the Spectrum Accelerate storage system. */
  password: string;
  /** Add the domain to a performance class. */
  perf_class?: string;
  /** Size of the domain. */
  size?: string;
  /** Soft capacity of the domain. */
  soft_capacity?: string;
  /** The desired state of the domain. */
  state?: "present" | "absent";
  /** Management user on the Spectrum Accelerate storage system. */
  username: string;
}

export interface IbmSaDomainReturn {
  /** Module return status. */
  msg?: string;
}

export const ibm_sa_domain = defineModule<IbmSaDomainArgs, IbmSaDomainReturn>("community.general.ibm_sa_domain");
