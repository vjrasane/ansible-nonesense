import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.one_service
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.one_service",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.one_service",
  moduleFqn: "ansible_collections.community.general.plugins.modules.one_service",
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
      "ansible/module_utils/urls.py",
    ],
  }, { artifact: communityGeneral, files: ["plugins/modules/one_service.py"] }],
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
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface OneServiceArgs {
  /** Password of the user to login into OpenNebula OneFlow API server. If not set then the value of the E(ONEFLOW_PASSWORD) environment variable is used. */
  api_password?: string;
  /** URL of the OpenNebula OneFlow API server. */
  api_url?: string;
  /** Name of the user to login into the OpenNebula OneFlow API server. If not set then the value of the E(ONEFLOW_USERNAME) environment variable is used. */
  api_username?: string;
  /** Number of VMs for the specified role. */
  cardinality?: number;
  /** Dictionary of key/value custom attributes which is used when instantiating a new service. */
  custom_attrs?: Record<string, unknown>;
  /** Force the new cardinality even if it is outside the limits. */
  force?: boolean;
  /** ID of the group which is set as the group of the service. */
  group_id?: number;
  /** Set permission mode of a service instance in octet format, for example V(0600) to give owner C(use) and C(manage) and nothing to group and others. */
  mode?: string;
  /** ID of the user which is set as the owner of the service. */
  owner_id?: number;
  /** Name of the role whose cardinality should be changed. */
  role?: string;
  /** ID of a service instance that you would like to manage. */
  service_id?: number;
  /** Name of a service instance that you would like to manage. */
  service_name?: string;
  /** V(present) - instantiate a service from a template specified with O(template_id) or O(template_name). */
  state?: "present" | "absent";
  /** ID of a service template to use to create a new instance of a service. */
  template_id?: number;
  /** Name of service template to use to create a new instance of a service. */
  template_name?: string;
  /** Setting O(unique=true) ensures that there is only one service instance running with a name set with O(service_name) when instantiating a service from a template specified with O(template_id) or O(template_name). Check examples below. */
  unique?: boolean;
  /** Wait for the instance to reach RUNNING state after DEPLOYING or COOLDOWN state after SCALING. */
  wait?: boolean;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneServiceReturn {
  /** Service's group ID. */
  group_id?: number;
  /** Service's group name. */
  group_name?: string;
  /** Service's mode. */
  mode?: number;
  /** Service's owner ID. */
  owner_id?: number;
  /** Service's owner name. */
  owner_name?: string;
  /** List of dictionaries of roles, each role is described by name, cardinality, state and nodes IDs. */
  roles?: string | string[];
  /** Service ID. */
  service_id?: number;
  /** Service name. */
  service_name?: string;
  /** State of service instance. */
  state?: string;
}
export const one_service = defineRemoteModule<OneServiceArgs, OneServiceReturn>(spec, meta);
