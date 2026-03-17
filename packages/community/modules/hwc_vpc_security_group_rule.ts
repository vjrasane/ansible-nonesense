// Auto-generated from: community.general.hwc_vpc_security_group_rule
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcVpcSecurityGroupRuleArgs {
  /** Provides supplementary information about the security group rule. The value is a string of no more than 255 characters that can contain letters and digits. */
  description?: string;
  /** Specifies the direction of access control. The value can be egress or ingress. */
  direction: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the IP protocol version. The value can be IPv4 or IPv6. If you do not set this parameter, IPv4 is used by default. */
  ethertype?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** The password to login with. */
  password: string;
  /** Specifies the end port number. The value ranges from 1 to 65535. If the protocol is not icmp, the value cannot be smaller than the port_range_min value. An empty value indicates all ports. */
  port_range_max?: number;
  /** Specifies the start port number. The value ranges from 1 to 65535. The value cannot be greater than the port_range_max value. An empty value indicates all ports. */
  port_range_min?: number;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** Specifies the protocol type. The value can be icmp, tcp, or udp. If the parameter is left blank, the security group supports all protocols. */
  protocol?: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the ID of the peer security group. The value is exclusive with parameter remote_ip_prefix. */
  remote_group_id?: string;
  /** Specifies the remote IP address. If the access control direction is set to egress, the parameter specifies the source IP address. If the access control direction is set to ingress, the parameter specifies the destination IP address. The value can be in the CIDR format or IP addresses. The parameter is exclusive with parameter remote_group_id. */
  remote_ip_prefix?: string;
  /** Specifies the security group rule ID, which uniquely identifies the security group rule. */
  security_group_id: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcSecurityGroupRuleReturn {
  /** Provides supplementary information about the security group rule. The value is a string of no more than 255 characters that can contain letters and digits. */
  description?: string;
  /** Specifies the direction of access control. The value can be egress or ingress. */
  direction?: string;
  /** Specifies the IP protocol version. The value can be IPv4 or IPv6. If you do not set this parameter, IPv4 is used by default. */
  ethertype?: string;
  /** Specifies the end port number. The value ranges from 1 to 65535. If the protocol is not icmp, the value cannot be smaller than the port_range_min value. An empty value indicates all ports. */
  port_range_max?: number;
  /** Specifies the start port number. The value ranges from 1 to 65535. The value cannot be greater than the port_range_max value. An empty value indicates all ports. */
  port_range_min?: number;
  /** Specifies the protocol type. The value can be icmp, tcp, or udp. If the parameter is left blank, the security group supports all protocols. */
  protocol?: string;
  /** Specifies the ID of the peer security group. The value is exclusive with parameter remote_ip_prefix. */
  remote_group_id?: string;
  /** Specifies the remote IP address. If the access control direction is set to egress, the parameter specifies the source IP address. If the access control direction is set to ingress, the parameter specifies the destination IP address. The value can be in the CIDR format or IP addresses. The parameter is exclusive with parameter remote_group_id. */
  remote_ip_prefix?: string;
  /** Specifies the security group rule ID, which uniquely identifies the security group rule. */
  security_group_id?: string;
}

export const hwc_vpc_security_group_rule = defineModule<HwcVpcSecurityGroupRuleArgs, HwcVpcSecurityGroupRuleReturn>("community.general.hwc_vpc_security_group_rule");
