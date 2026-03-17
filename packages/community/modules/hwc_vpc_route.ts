// Auto-generated from: community.general.hwc_vpc_route
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcVpcRouteArgs {
  /** Specifies the destination IP address or CIDR block. */
  destination: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the next hop. The value is VPC peering connection ID. */
  next_hop: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** Specifies the type of route. */
  type?: string;
  /** The user name to login with. */
  user: string;
  /** Specifies the VPC ID to which route is added. */
  vpc_id: string;
}

export interface HwcVpcRouteReturn {
  /** Specifies the destination IP address or CIDR block. */
  destination?: string;
  /** UUID of the route. */
  id?: string;
  /** Specifies the next hop. The value is VPC peering connection ID. */
  next_hop?: string;
  /** Specifies the type of route. */
  type?: string;
  /** Specifies the VPC ID to which route is added. */
  vpc_id?: string;
}

export const hwc_vpc_route = defineModule<HwcVpcRouteArgs, HwcVpcRouteReturn>("community.general.hwc_vpc_route");
