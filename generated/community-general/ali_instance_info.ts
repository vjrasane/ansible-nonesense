// Auto-generated from: community.general.ali_instance_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AliInstanceInfoArgs {
  /** Alibaba Cloud access key. If not set then the value of environment variable E(ALICLOUD_ACCESS_KEY), E(ALICLOUD_ACCESS_KEY_ID) is used instead. */
  alicloud_access_key?: string;
  /** If provided with a role ARN, Ansible attempts to assume this role using the supplied credentials. */
  alicloud_assume_role?: Record<string, unknown>;
  /** The Alibaba Cloud C(role_arn). The ARN of the role to assume. If ARN is set to an empty string, it does not perform role switching. It supports environment variable E(ALICLOUD_ASSUME_ROLE_ARN). Ansible executes with provided credentials. */
  alicloud_assume_role_arn?: string;
  /** The Alibaba Cloud C(session_expiration). The time after which the established session for assuming role expires. Valid value range 900-3600 seconds. Default to 3600 (in this case Alicloud use own default value). It supports environment variable E(ALICLOUD_ASSUME_ROLE_SESSION_EXPIRATION). */
  alicloud_assume_role_session_expiration?: number;
  /** The Alibaba Cloud session_name. The session name to use when assuming the role. If omitted, 'ansible' is passed to the AssumeRole call as session name. It supports environment variable E(ALICLOUD_ASSUME_ROLE_SESSION_NAME). */
  alicloud_assume_role_session_name?: string;
  /** The Alibaba Cloud region to use. If not specified then the value of environment variable E(ALICLOUD_REGION), E(ALICLOUD_REGION_ID) is used instead. */
  alicloud_region: string;
  /** Alibaba Cloud secret key. If not set then the value of environment variable E(ALICLOUD_SECRET_KEY), E(ALICLOUD_SECRET_ACCESS_KEY) is used instead. */
  alicloud_secret_key?: string;
  /** The Alibaba Cloud security token. If not specified then the value of environment variable E(ALICLOUD_SECURITY_TOKEN) is used instead. */
  alicloud_security_token?: string;
  /** The RAM Role Name attached on a ECS instance for API operations. You can retrieve this from the 'Access Control' section of the Alibaba Cloud console. */
  ecs_role_name?: string;
  /** A dict of filters to apply. Each dict item consists of a filter key and a filter value. The filter keys can be all of request parameters. See U(https://www.alibabacloud.com/help/doc-detail/25506.htm) for parameter details. Filter keys can be same as request parameter name or be lower case and use underscore (V("_")) or dash (V("-")) to connect different words in one parameter. C(InstanceIds) should be a list. C(Tag.n.Key) and C(Tag.n.Value) should be a dict and using O(tags) instead. */
  filters?: Record<string, unknown>;
  /** Use a instance name prefix to filter ECS instances. */
  name_prefix?: string;
  /** This is the Alicloud profile name as set in the shared credentials file. It can also be sourced from the E(ALICLOUD_PROFILE) environment variable. */
  profile?: string;
  /** This is the path to the shared credentials file. It can also be sourced from the E(ALICLOUD_SHARED_CREDENTIALS_FILE) environment variable. */
  shared_credentials_file?: string;
  /** A hash/dictionaries of instance tags. C({"key":"value"}). */
  tags?: Record<string, unknown>;
}

export interface AliInstanceInfoReturn {
  /** List of ECS instance IDs. */
  ids?: string | string[];
  /** List of ECS instances. */
  instances?: unknown;
}

export const ali_instance_info = defineModule<AliInstanceInfoArgs, AliInstanceInfoReturn>("community.general.ali_instance_info");
