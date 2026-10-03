import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.one_vm
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.one_vm",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.one_vm",
  moduleFqn: "ansible_collections.community.general.plugins.modules.one_vm",
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
      "ansible/module_utils/common/dict_transformations.py",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_opennebula.py", "plugins/modules/one_vm.py"] }],
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
export interface OneVmArgs {
  /** Password of the user to login into OpenNebula RPC server. If not set then the value of the E(ONE_PASSWORD) environment variable is used. if both O(api_username) or O(api_password) are not set, then it tries to authenticate with ONE auth file. Default path is C(~/.one/one_auth). */
  api_password?: string;
  /** URL of the OpenNebula RPC server. */
  api_url?: string;
  /** Name of the user to login into the OpenNebula RPC server. If not set then the value of the E(ONE_USERNAME) environment variable is used. */
  api_username?: string;
  /** A dictionary of key/value attributes to add to new instances, or for setting C(state) of instances with these attributes. */
  attributes?: Record<string, unknown>;
  /** Number of instances to launch. */
  count?: number;
  /** A dictionary of key/value attributes that can only be used with O(exact_count) to determine how many nodes based on a specific attributes criteria should be deployed. This can be expressed in multiple ways and is shown in the EXAMPLES section. */
  count_attributes?: Record<string, unknown>;
  /** A list of labels that can only be used with O(exact_count) to determine how many nodes based on a specific labels criteria should be deployed. This can be expressed in multiple ways and is shown in the EXAMPLES section. */
  count_labels?: string | string[];
  /** Percentage of CPU divided by 100 required for the new instance. Half a processor is written 0.5. */
  cpu?: number;
  /** Name of Datastore to use to create a new instance. */
  datastore_id?: number;
  /** Name of Datastore to use to create a new instance. */
  datastore_name?: string;
  /** Creates an image from a VM disk. */
  disk_saveas?: Record<string, unknown>;
  /** The size of the disk created for new instances (in MB, GB, TB,...). */
  disk_size?: string | string[];
  /** Indicates how many instances that match O(count_attributes) and O(count_labels) parameters should be deployed. Instances are either created or terminated based on this value. */
  exact_count?: number;
  /** ID of the group which is set as the group of the instance. */
  group_id?: number;
  /** Reboot, power-off or terminate instances C(hard). */
  hard?: boolean;
  /** A list of instance IDs used for states: V(absent), V(running), V(rebooted), V(poweredoff). */
  instance_ids?: number | number[];
  /** A list of labels to associate with new instances, or for setting C(state) of instances with these labels. */
  labels?: string | string[];
  /** The size of the memory for new instances (in MB, GB, ..). */
  memory?: string;
  /** Set permission mode of the instance in octet format, for example V(0600) to give owner C(use) and C(manage) and nothing to group and others. */
  mode?: string;
  /** A list of dictionaries with network parameters. See examples for more details. */
  networks?: Record<string, unknown> | Record<string, unknown>[];
  /** ID of the user which is set as the owner of the instance. */
  owner_id?: number;
  /** Create a private persistent copy of the template plus any image defined in DISK, and instantiate that copy. */
  persistent?: boolean;
  /** V(present) - create instances from a template specified with C(template_id)/C(template_name). */
  state?: "present" | "absent" | "running" | "rebooted" | "poweredoff";
  /** ID of a VM template to use to create a new instance. */
  template_id?: number;
  /** Name of VM template to use to create a new instance. */
  template_name?: string;
  /** A dictionary of USER_TEMPLATE key/value pairs to merge onto existing VMs. */
  update_attributes?: Record<string, unknown>;
  /** When O(instance_ids) is provided, updates running VMs with the C(updateconf) API call. */
  updateconf?: Record<string, unknown>;
  /** Number of CPUs (cores) the new VM uses. */
  vcpu?: number;
  /** Set to true to put VM on hold while creating. */
  vm_start_on_hold?: boolean;
  /** Wait for the instance to reach its desired state before returning. Keep in mind if you are waiting for instance to be in running state it does not mean that you are able to SSH on that machine only that boot process have started on that instance. See the example using the M(ansible.builtin.wait_for) module for details. */
  wait?: boolean;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneVmReturn {
  /** A list of instances info whose state is changed or which are fetched with O(instance_ids) option. */
  instances?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of instances IDs whose state is changed or which are fetched with O(instance_ids) option. */
  instances_ids?: string | string[];
  /** A list of instances info based on a specific attributes and/or labels that are specified with O(count_attributes) and O(count_labels) options. */
  tagged_instances?: Record<string, unknown> | Record<string, unknown>[];
}
export const one_vm = defineRemoteModule<OneVmArgs, OneVmReturn>(spec, meta);
