import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ali_instance_info
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ali_instance_info",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ali_instance_info",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ali_instance_info",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_dataclass_validation.py",
      "ansible/module_utils/_internal/_datatag/__init__.py",
      "ansible/module_utils/_internal/_datatag/_tags.py",
      "ansible/module_utils/_internal/_debugging.py",
      "ansible/module_utils/_internal/_deprecator.py",
      "ansible/module_utils/_internal/_errors.py",
      "ansible/module_utils/_internal/_event_utils.py",
      "ansible/module_utils/_internal/_json/__init__.py",
      "ansible/module_utils/_internal/_json/_legacy_encoder.py",
      "ansible/module_utils/_internal/_json/_profiles/__init__.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_c2m.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_m2c.py",
      "ansible/module_utils/_internal/_json/_profiles/_tagless.py",
      "ansible/module_utils/_internal/_messages.py",
      "ansible/module_utils/_internal/_patches/__init__.py",
      "ansible/module_utils/_internal/_patches/_dataclass_annotation_patch.py",
      "ansible/module_utils/_internal/_patches/_socket_patch.py",
      "ansible/module_utils/_internal/_patches/_sys_intern_patch.py",
      "ansible/module_utils/_internal/_plugin_info.py",
      "ansible/module_utils/_internal/_stack.py",
      "ansible/module_utils/_internal/_text_utils.py",
      "ansible/module_utils/_internal/_traceback.py",
      "ansible/module_utils/_internal/_validation.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/parameters.py",
      "ansible/module_utils/common/process.py",
      "ansible/module_utils/common/sys_info.py",
      "ansible/module_utils/common/text/converters.py",
      "ansible/module_utils/common/text/formatters.py",
      "ansible/module_utils/common/validation.py",
      "ansible/module_utils/common/warnings.py",
      "ansible/module_utils/compat/selinux.py",
      "ansible/module_utils/compat/typing.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
    ],
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_alicloud_ecs.py", "plugins/modules/ali_instance_info.py"],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/general/__init__.py",
    "ansible_collections/community/general/plugins/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
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
  instances?: Record<string, unknown> | Record<string, unknown>[];
}
export const ali_instance_info = defineRemoteModule<AliInstanceInfoArgs, AliInstanceInfoReturn>(spec, meta);
