// Auto-generated from: community.general.hwc_vpc_port
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcVpcPortArgs {
  /** Specifies the administrative state of the port. */
  admin_state_up?: boolean;
  /** Specifies a set of zero or more allowed address pairs. */
  allowed_address_pairs?: Record<string, unknown> | Record<string, unknown>[];
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the extended option of DHCP. */
  extra_dhcp_opts?: Record<string, unknown> | Record<string, unknown>[];
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the port IP address. */
  ip_address?: string;
  /** Specifies the port name. The value can contain no more than 255 characters. */
  name?: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the ID of the security group. */
  security_groups?: string | string[];
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** Specifies the ID of the subnet to which the port belongs. */
  subnet_id: string;
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
  };
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcPortReturn {
  /** Specifies the administrative state of the port. */
  admin_state_up?: boolean;
  /** Specifies a set of zero or more allowed address pairs. */
  allowed_address_pairs?: string | string[];
  /** Specifies the extended option of DHCP. */
  extra_dhcp_opts?: string | string[];
  /** Specifies the port IP address. */
  ip_address?: string;
  /** Specifies the port MAC address. */
  mac_address?: string;
  /** Specifies the port name. The value can contain no more than 255 characters. */
  name?: string;
  /** Specifies the ID of the security group. */
  security_groups?: string | string[];
  /** Specifies the ID of the subnet to which the port belongs. */
  subnet_id?: string;
}

export const hwc_vpc_port = defineModule<HwcVpcPortArgs, HwcVpcPortReturn>("community.general.hwc_vpc_port");
