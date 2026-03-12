// Auto-generated from: community.general.hwc_vpc_security_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HwcVpcSecurityGroupArgs {
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the enterprise project ID. When creating a security group, associate the enterprise project ID with the security group.s. */
  enterprise_project_id?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the security group name. The value is a string of 1 to 64 characters that can contain letters, digits, underscores (V(_)), hyphens (V(-)), and periods (V(.)). */
  name: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The user name to login with. */
  user: string;
  /** Specifies the resource ID of the VPC to which the security group belongs. */
  vpc_id?: string;
}

export interface HwcVpcSecurityGroupReturn {
  /** Specifies the enterprise project ID. When creating a security group, associate the enterprise project ID with the security group. */
  enterprise_project_id?: string;
  /** Specifies the security group name. The value is a string of 1 to 64 characters that can contain letters, digits, underscores (V(_)), hyphens (V(-)), and periods (V(.)). */
  name?: string;
  /** Specifies the security group rule, which ensures that resources in the security group can communicate with one another. */
  rules?: unknown;
  /** Specifies the resource ID of the VPC to which the security group belongs. */
  vpc_id?: string;
}

export const hwc_vpc_security_group = defineModule<HwcVpcSecurityGroupArgs, HwcVpcSecurityGroupReturn>("community.general.hwc_vpc_security_group");
