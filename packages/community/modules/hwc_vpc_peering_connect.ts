// Auto-generated from: community.general.hwc_vpc_peering_connect
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcVpcPeeringConnectArgs {
  /** The description of vpc peering connection. */
  description?: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the ID of local VPC. */
  local_vpc_id: string;
  /** Specifies the name of the VPC peering connection. The value can contain 1 to 64 characters. */
  name: string;
  /** The password to login with. */
  password: string;
  /** Specifies information about the peering VPC. */
  peering_vpc: {
    project_id?: string;
    vpc_id: string;
  };
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
  };
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcPeeringConnectReturn {
  /** The description of vpc peering connection. */
  description?: string;
  /** Specifies the ID of local VPC. */
  local_vpc_id?: string;
  /** Specifies the name of the VPC peering connection. The value can contain 1 to 64 characters. */
  name?: string;
  /** Specifies information about the peering VPC. */
  peering_vpc?: Record<string, unknown>;
}

export const hwc_vpc_peering_connect = defineModule<HwcVpcPeeringConnectArgs, HwcVpcPeeringConnectReturn>("community.general.hwc_vpc_peering_connect");
