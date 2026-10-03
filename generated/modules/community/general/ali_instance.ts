import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ali_instance
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ali_instance",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ali_instance",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ali_instance",
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
    files: ["plugins/module_utils/_alicloud_ecs.py", "plugins/modules/ali_instance.py"],
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
export interface AliInstanceArgs {
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
  /** Whether allocate a public IP for the new instance. */
  allocate_public_ip?: boolean;
  /** Whether automate renew the charge of the instance. */
  auto_renew?: boolean;
  /** The duration of the automatic renew the charge of the instance. Required when O(auto_renew=true). */
  auto_renew_period?: number;
  /** Aliyun availability zone ID in which to launch the instance. If it is not specified, it is allocated by system automatically. */
  availability_zone?: string;
  /** The number of the new instance. An integer value which indicates how many instances that match O(count_tag) should be running. Instances are either created or terminated based on this value. */
  count?: number;
  /** O(count) determines how many instances based on a specific tag criteria should be present. This can be expressed in multiple ways and is shown in the EXAMPLES section. The specified count_tag must already exist or be passed in as the O(tags) option. If it is not specified, it is replaced by O(instance_name). */
  count_tag?: string;
  /** The description of ECS instance, which is a string of 2 to 256 characters. It cannot begin with V(http://) or V(https://). */
  description?: string;
  /** Specifies whether to send a dry-run request. */
  dry_run?: boolean;
  /** The RAM Role Name attached on a ECS instance for API operations. You can retrieve this from the 'Access Control' section of the Alibaba Cloud console. */
  ecs_role_name?: string;
  /** Whether the current operation needs to be execute forcibly. */
  force?: boolean;
  /** Instance host name. Ordered hostname is not supported. */
  host_name?: string;
  /** Image ID used to launch instances. Required when O(state=present) and creating new ECS instances. */
  image_id?: string;
  /** Whether to change instance disks charge type when changing instance charge type. */
  include_data_disks?: boolean;
  /** The charge type of the instance. */
  instance_charge_type?: "PrePaid" | "PostPaid";
  /** A list of instance IDs. It is required when need to operate existing instances. If it is specified, O(count) is ignored. */
  instance_ids?: string | string[];
  /** The name of ECS instance, which is a string of 2 to 128 Chinese or English characters. It must begin with an uppercase/lowercase letter or a Chinese character and can contain numerals, V(.), V(_) or V(-). It cannot begin with V(http://) or V(https://). */
  instance_name?: string;
  /** Instance type used to launch instances. Required when O(state=present) and creating new ECS instances. */
  instance_type?: string;
  /** Internet charge type of ECS instance. */
  internet_charge_type?: "PayByBandwidth" | "PayByTraffic";
  /** The name of key pair which is used to access ECS instance in SSH. */
  key_name?: string;
  /** Maximum incoming bandwidth from the public network, measured in Mbps (Megabits per second). */
  max_bandwidth_in?: number;
  /** Maximum outgoing bandwidth to the public network, measured in Mbps (Megabits per second). Required when O(allocate_public_ip=true). Ignored when O(allocate_public_ip=false). */
  max_bandwidth_out?: number;
  /** The password to login instance. After rebooting instances, modified password is effective. */
  password?: string;
  /** The charge duration of the instance, in months. Required when O(instance_charge_type=PrePaid). */
  period?: number;
  /** The duration unit that you are buying the resource. It is valid when O(instance_charge_type=PrePaid). */
  period_unit?: "Month" | "Week";
  /** This is the Alicloud profile name as set in the shared credentials file. It can also be sourced from the E(ALICLOUD_PROFILE) environment variable. */
  profile?: string;
  /** Delete any tags not specified in the task that are on the instance. If V(true), it means you have to specify all the desired tags on each task affecting an instance. */
  purge_tags?: boolean;
  /** The name of the instance RAM role. */
  ram_role_name?: string;
  /** A list of security group IDs. */
  security_groups?: string | string[];
  /** This is the path to the shared credentials file. It can also be sourced from the E(ALICLOUD_SHARED_CREDENTIALS_FILE) environment variable. */
  shared_credentials_file?: string;
  /** The maximum hourly price for the preemptible instance. This parameter supports a maximum of three decimal places and takes effect when the SpotStrategy parameter is set to SpotWithPriceLimit. */
  spot_price_limit?: number;
  /** The bidding mode of the pay-as-you-go instance. This parameter is valid when O(instance_charge_type=PostPaid). */
  spot_strategy?: "NoSpot" | "SpotWithPriceLimit" | "SpotAsPriceGo";
  /** The state of the instance after operating. */
  state?: "present" | "running" | "stopped" | "restarted" | "absent";
  /** Category of the system disk. */
  system_disk_category?: "cloud_efficiency" | "cloud_ssd";
  /** Description of the system disk. */
  system_disk_description?: string;
  /** Name of the system disk. */
  system_disk_name?: string;
  /** Size of the system disk, in GB. The valid values are V(40)~V(500). */
  system_disk_size?: number;
  /** A hash/dictionaries of instance tags, to add to the new instance or for starting/stopping instance by tag. V({"key":"value"}). */
  tags?: Record<string, unknown>;
  /** Specifies whether to add sequential suffixes to the host_name. The sequential suffix ranges from 001 to 999. */
  unique_suffix?: boolean;
  /** User-defined data to customize the startup behaviors of an ECS instance and to pass data into an ECS instance. It only takes effect when launching the new ECS instances. */
  user_data?: string;
  /** The subnet ID in which to launch the instances (VPC). */
  vswitch_id?: string;
}

export interface AliInstanceReturn {
  /** List of ECS instance IDs. */
  ids?: string | string[];
  /** List of ECS instances. */
  instances?: Record<string, unknown> | Record<string, unknown>[];
}
export const ali_instance = defineRemoteModule<AliInstanceArgs, AliInstanceReturn>(spec, meta);
