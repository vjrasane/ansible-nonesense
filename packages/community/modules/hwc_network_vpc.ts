// Auto-generated from: community.general.hwc_network_vpc
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcNetworkVpcArgs {
  /** The range of available subnets in the VPC. */
  cidr: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** The name of vpc. */
  name: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in VPC. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
    delete?: string;
    update?: string;
  };
  /** The user name to login with. */
  user: string;
}

export interface HwcNetworkVpcReturn {
  /** The range of available subnets in the VPC. */
  cidr?: string;
  /** Show whether the shared SNAT is enabled. */
  enable_shared_snat?: boolean;
  /** The ID of VPC. */
  id?: string;
  /** The name of VPC. */
  name?: string;
  /** The route information. */
  routes?: unknown;
  /** The status of VPC. */
  status?: string;
}

export const hwc_network_vpc = defineModule<HwcNetworkVpcArgs, HwcNetworkVpcReturn>("community.general.hwc_network_vpc");
