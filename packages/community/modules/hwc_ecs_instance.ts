// Auto-generated from: community.general.hwc_ecs_instance
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcEcsInstanceArgs {
  /** Specifies the initial login password of the administrator account for logging in to an ECS using password authentication. The Linux administrator is root, and the Windows administrator is Administrator. Password complexity requirements, consists of 8 to 26 characters. The password must contain at least three of the following character types 'uppercase letters, lowercase letters, digits, and special characters (V(!@$%^-_=+[{}]:,./?))'. The password cannot contain the username or the username in reverse. The Windows ECS password cannot contain the username, the username in reverse, or more than two consecutive characters in the username. */
  admin_pass?: string;
  /** Specifies the name of the AZ where the ECS is located. */
  availability_zone: string;
  /** Specifies the data disks of ECS instance. */
  data_volumes?: Record<string, unknown> | Record<string, unknown>[];
  /** Specifies the description of an ECS, which is a null string by default. Can contain a maximum of 85 characters. Cannot contain special characters, such as V(<) and V(>). */
  description?: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the ID of the elastic IP address assigned to the ECS. Only elastic IP addresses in the DOWN state can be assigned. */
  eip_id?: string;
  /** Specifies whether automatic recovery is enabled on the ECS. */
  enable_auto_recovery?: boolean;
  /** Specifies the ID of the enterprise project to which the ECS belongs. */
  enterprise_project_id?: string;
  /** Specifies the name of the system flavor. */
  flavor_name: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the ID of the system image. */
  image_id: string;
  /** Specifies the ECS name. Value requirements consists of 1 to 64 characters, including letters, digits, underscores (V(_)), hyphens (V(-)), periods (V(.)). */
  name: string;
  /** Specifies the NIC information of the ECS. Constraints the network of the NIC must belong to the VPC specified by vpc_id. A maximum of 12 NICs can be attached to an ECS. */
  nics: Record<string, unknown> | Record<string, unknown>[];
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the configuration of the ECS's system disks. */
  root_volume: {
    size?: number;
    snapshot_id?: string;
    volume_type: string;
  };
  /** Specifies the security groups of the ECS. If this parameter is left blank, the default security group is bound to the ECS by default. */
  security_groups?: string | string[];
  /** Specifies the metadata of ECS to be created. */
  server_metadata?: Record<string, unknown>;
  /** Specifies the tags of an ECS. When you create ECSs, one ECS supports up to 10 tags. */
  server_tags?: Record<string, unknown>;
  /** Specifies the name of the SSH key used for logging in to the ECS. */
  ssh_key_name?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
    delete?: string;
    update?: string;
  };
  /** The user name to login with. */
  user: string;
  /** Specifies the user data to be injected during the ECS creation process. Text, text files, and gzip files can be injected. The content to be injected must be encoded with base64. The maximum size of the content to be injected (before encoding) is 32 KB. For Linux ECSs, this parameter does not take effect when adminPass is used. */
  user_data?: string;
  /** Specifies the ID of the VPC to which the ECS belongs. */
  vpc_id: string;
}

export interface HwcEcsInstanceReturn {
  /** Specifies the initial login password of the administrator account for logging in to an ECS using password authentication. The Linux administrator is root, and the Windows administrator is Administrator. Password complexity requirements consists of 8 to 26 characters. The password must contain at least three of the following character types "uppercase letters, lowercase letters, digits, and special characters (!@$%^-_=+[{}]:,./?)". The password cannot contain the username or the username in reverse. The Windows ECS password cannot contain the username, the username in reverse, or more than two consecutive characters in the username. */
  admin_pass?: string;
  /** Specifies the name of the AZ where the ECS is located. */
  availability_zone?: string;
  /** Specifies the configuration driver. */
  config_drive?: string;
  /** Specifies the time when an ECS was created. */
  created?: string;
  /** Specifies the data disks of ECS instance. */
  data_volumes?: string | string[];
  /** Specifies the description of an ECS, which is a null string by default. Can contain a maximum of 85 characters. Cannot contain special characters, such as < and >. */
  description?: string;
  /** Specifies the disk configuration type. MANUAL is The image space is not expanded. AUTO is the image space of the system disk is expanded to be as same as the flavor. */
  disk_config_type?: string;
  /** Specifies the ID of the elastic IP address assigned to the ECS. Only elastic IP addresses in the DOWN state can be assigned. */
  eip_id?: string;
  /** Specifies whether automatic recovery is enabled on the ECS. */
  enable_auto_recovery?: boolean;
  /** Specifies the ID of the enterprise project to which the ECS belongs. */
  enterprise_project_id?: string;
  /** Specifies the name of the system flavor. */
  flavor_name?: string;
  /** Specifies the host name of the ECS. */
  host_name?: string;
  /** Specifies the ID of the system image. */
  image_id?: string;
  /** Specifies the image name of the ECS. */
  image_name?: string;
  /** Specifies the ECS name. Value requirements "Consists of 1 to 64 characters, including letters, digits, underscores (V(_)), hyphens (V(-)), periods (V(.)).". */
  name?: string;
  /** Specifies the NIC information of the ECS. The network of the NIC must belong to the VPC specified by vpc_id. A maximum of 12 NICs can be attached to an ECS. */
  nics?: string | string[];
  /** Specifies the power status of the ECS. */
  power_state?: number;
  /** Specifies the configuration of the ECS's system disks. */
  root_volume?: Record<string, unknown>;
  /** Specifies the security groups of the ECS. If this parameter is left blank, the default security group is bound to the ECS by default. */
  security_groups?: string | string[];
  /** Specifies the ECS alias. */
  server_alias?: string;
  /** Specifies the metadata of ECS to be created. */
  server_metadata?: Record<string, unknown>;
  /** Specifies the tags of an ECS. When you create ECSs, one ECS supports up to 10 tags. */
  server_tags?: Record<string, unknown>;
  /** Specifies the name of the SSH key used for logging in to the ECS. */
  ssh_key_name?: string;
  /** Specifies the ECS status. Options are ACTIVE, REBOOT, HARD_REBOOT, REBUILD, MIGRATING, BUILD, SHUTOFF, RESIZE, VERIFY_RESIZE, ERROR, and DELETED. */
  status?: string;
  /** Specifies the user data to be injected during the ECS creation process. Text, text files, and gzip files can be injected. The content to be injected must be encoded with base64. The maximum size of the content to be injected (before encoding) is 32 KB. For Linux ECSs, this parameter does not take effect when adminPass is used. */
  user_data?: string;
  /** Specifies the ID of the VPC to which the ECS belongs. */
  vpc_id?: string;
}

export const hwc_ecs_instance = defineModule<HwcEcsInstanceArgs, HwcEcsInstanceReturn>("community.general.hwc_ecs_instance");
