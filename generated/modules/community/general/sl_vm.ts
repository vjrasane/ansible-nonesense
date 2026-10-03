import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.sl_vm
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.sl_vm",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.sl_vm",
  moduleFqn: "ansible_collections.community.general.plugins.modules.sl_vm",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/sl_vm.py"] }],
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
export interface SlVmArgs {
  /** Count of cpus to be assigned to new virtual instance. */
  cpus?: number;
  /** Datacenter for the virtual instance to be deployed. */
  datacenter?:
    | "ams01"
    | "ams03"
    | "che01"
    | "dal01"
    | "dal05"
    | "dal06"
    | "dal09"
    | "dal10"
    | "dal12"
    | "dal13"
    | "fra02"
    | "fra04"
    | "fra05"
    | "hkg02"
    | "hou02"
    | "lon02"
    | "lon04"
    | "lon06"
    | "mel01"
    | "mex01"
    | "mil01"
    | "mon01"
    | "osl01"
    | "par01"
    | "sao01"
    | "sea01"
    | "seo01"
    | "sjc01"
    | "sjc03"
    | "sjc04"
    | "sng01"
    | "syd01"
    | "syd04"
    | "tok02"
    | "tor01"
    | "wdc01"
    | "wdc04"
    | "wdc06"
    | "wdc07";
  /** Flag to determine if the instance should be deployed in dedicated space. */
  dedicated?: boolean;
  /** List of disk sizes to be assigned to new virtual instance. */
  disks?: number | number[];
  /** Domain name to be provided to a virtual instance. */
  domain?: string;
  /** Specify which SoftLayer flavor template to use instead of cpus and memory. */
  flavor?: string;
  /** Hostname to be provided to a virtual instance. */
  hostname?: string;
  /** Flag to determine if the instance should be hourly billed. */
  hourly?: boolean;
  /** Image Template to be used for new virtual instance. */
  image_id?: string;
  /** Instance ID of the virtual instance to perform action option. */
  instance_id?: string;
  /** Flag to determine if local disk should be used for the new instance. */
  local_disk?: boolean;
  /** Amount of memory to be assigned to new virtual instance. */
  memory?: number;
  /** NIC Speed to be assigned to new virtual instance. */
  nic_speed?: number;
  /** OS Code to be used for new virtual instance. */
  os_code?: string;
  /** URL of a post provisioning script to be loaded and executed on virtual instance. */
  post_uri?: string;
  /** Flag to determine if the instance should be private only. */
  private?: boolean;
  /** VLAN by its ID to be assigned to the private NIC. */
  private_vlan?: string;
  /** VLAN by its ID to be assigned to the public NIC. */
  public_vlan?: string;
  /** List of ssh keys by their ID to be assigned to a virtual instance. */
  ssh_keys?: string | string[];
  /** Create, or cancel a virtual instance. */
  state?: "absent" | "present";
  /** Tag or list of tags to be provided to a virtual instance. */
  tags?: string;
  /** Flag used to wait for active status before returning. */
  wait?: boolean;
  /** Time in seconds before wait returns. */
  wait_time?: number;
}

export type SlVmReturn = Record<string, unknown>;
export const sl_vm = defineRemoteModule<SlVmArgs, SlVmReturn>(spec, meta);
