// Auto-generated from: community.general.hwc_vpc_private_ip
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HwcVpcPrivateIpArgs {
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the target IP address. The value can be an available IP address in the subnet. If it is not specified, the system automatically assigns an IP address. Cannot be changed after creating the private IP. */
  ip_address?: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** Specifies the ID of the subnet from which IP addresses are assigned. Cannot be changed after creating the private IP. */
  subnet_id: string;
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcPrivateIpReturn {
  /** Specifies the target IP address. The value can be an available IP address in the subnet. If it is not specified, the system automatically assigns an IP address. */
  ip_address?: string;
  /** Specifies the ID of the subnet from which IP addresses are assigned. */
  subnet_id?: string;
}

export const hwc_vpc_private_ip = defineModule<HwcVpcPrivateIpArgs, HwcVpcPrivateIpReturn>("community.general.hwc_vpc_private_ip");
