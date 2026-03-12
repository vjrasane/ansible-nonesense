// Auto-generated from: community.general.hwc_vpc_subnet
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HwcVpcSubnetArgs {
  /** Specifies the AZ to which the subnet belongs. Cannot be changed after creating the subnet. */
  availability_zone?: string;
  /** Specifies the subnet CIDR block. The value must be within the VPC CIDR block and be in CIDR format. The subnet mask cannot be greater than 28. Cannot be changed after creating the subnet. */
  cidr: string;
  /** Specifies whether DHCP is enabled for the subnet. The value can be true (enabled) or false(disabled), and default value is true. If this parameter is set to false, newly created ECSs cannot obtain IP addresses, and usernames and passwords cannot be injected using Cloud-init. */
  dhcp_enable?: boolean;
  /** Specifies the DNS server addresses for subnet. The address in the head is used first. */
  dns_address?: string | string[];
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the gateway of the subnet. The value must be an IP address in the subnet. Cannot be changed after creating the subnet. */
  gateway_ip: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the subnet name. The value is a string of 1 to 64 characters that can contain letters, digits, underscores (V(_)), hyphens (V(-)), and periods (V(.)). */
  name: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
    update?: string;
  };
  /** The user name to login with. */
  user: string;
  /** Specifies the ID of the VPC to which the subnet belongs. Cannot be changed after creating the subnet. */
  vpc_id: string;
}

export interface HwcVpcSubnetReturn {
  /** Specifies the AZ to which the subnet belongs. */
  availability_zone?: string;
  /** Specifies the subnet CIDR block. The value must be within the VPC CIDR block and be in CIDR format. The subnet mask cannot be greater than 28. */
  cidr?: string;
  /** Specifies whether DHCP is enabled for the subnet. The value can be true (enabled) or false(disabled), and default value is true. If this parameter is set to false, newly created ECSs cannot obtain IP addresses, and usernames and passwords cannot be injected using Cloud-init. */
  dhcp_enable?: boolean;
  /** Specifies the DNS server addresses for subnet. The address in the head is used first. */
  dns_address?: string | string[];
  /** Specifies the gateway of the subnet. The value must be an IP address in the subnet. */
  gateway_ip?: string;
  /** Specifies the subnet name. The value is a string of 1 to 64 characters that can contain letters, digits, underscores (V(_)), hyphens (V(-)), and periods (V(.)). */
  name?: string;
  /** Specifies the ID of the VPC to which the subnet belongs. */
  vpc_id?: string;
}

export const hwc_vpc_subnet = defineModule<HwcVpcSubnetArgs, HwcVpcSubnetReturn>("community.general.hwc_vpc_subnet");
