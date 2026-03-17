// Auto-generated from: community.general.hwc_vpc_eip
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcVpcEipArgs {
  /** Specifies the dedicated bandwidth object. */
  dedicated_bandwidth?: {
    charge_mode: string;
    name: string;
    size: number;
  };
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the enterprise project ID. */
  enterprise_project_id?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** The value can be 4 (IPv4 address) or 6 (IPv6 address). If this parameter is left blank, an IPv4 address is assigned. */
  ip_version?: number;
  /** Specifies the obtained IPv4 EIP. The system automatically assigns an EIP if you do not specify it. */
  ipv4_address?: string;
  /** The password to login with. */
  password: string;
  /** Specifies the port ID. This parameter is returned only when a private IP address is bound with the EIP. */
  port_id?: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the ID of shared bandwidth. */
  shared_bandwidth_id?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
    update?: string;
  };
  /** Specifies the EIP type. */
  type: string;
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcEipReturn {
  /** Specifies the time (UTC time) when the EIP was assigned. */
  create_time?: string;
  /** Specifies the dedicated bandwidth object. */
  dedicated_bandwidth?: Record<string, unknown>;
  /** Specifies the enterprise project ID. */
  enterprise_project_id?: string;
  /** The value can be 4 (IPv4 address) or 6 (IPv6 address). If this parameter is left blank, an IPv4 address is assigned. */
  ip_version?: number;
  /** Specifies the obtained IPv4 EIP. The system automatically assigns an EIP if you do not specify it. */
  ipv4_address?: string;
  /** Specifies the obtained IPv6 EIP. */
  ipv6_address?: string;
  /** Specifies the port ID. This parameter is returned only when a private IP address is bound with the EIP. */
  port_id?: string;
  /** Specifies the private IP address bound with the EIP. This parameter is returned only when a private IP address is bound with the EIP. */
  private_ip_address?: string;
  /** Specifies the ID of shared bandwidth. */
  shared_bandwidth_id?: string;
  /** Specifies the EIP type. */
  type?: string;
}

export const hwc_vpc_eip = defineModule<HwcVpcEipArgs, HwcVpcEipReturn>("community.general.hwc_vpc_eip");
