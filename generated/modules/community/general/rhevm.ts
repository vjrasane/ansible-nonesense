import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.rhevm
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.rhevm",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.rhevm",
  moduleFqn: "ansible_collections.community.general.plugins.modules.rhevm",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/rhevm.py"] }],
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
export interface RhevmArgs {
  /** This option uses complex arguments and is a list of items that specify the bootorder. */
  boot_order?: string | string[];
  /** The CD you wish to have mounted on the VM when O(state=cd). */
  cd_drive?: string;
  /** The RHEV/oVirt cluster in which you want you VM to start. */
  cluster?: string;
  /** This parameter is used to configure the CPU share. */
  cpu_share?: number;
  /** The RHEV/oVirt datacenter in which you want you VM to start. */
  datacenter?: string;
  /** This option sets the delete protection checkbox. */
  del_prot?: boolean;
  /** This option uses complex arguments and is a list of disks with the options V(name), V(size), and V(domain). */
  disks?: string | string[];
  /** This option uses complex arguments and is a list of interfaces with the options V(name) and V(vlan). */
  ifaces?: string | string[];
  /** The template to use for the VM. */
  image?: string;
  /** A boolean switch to make a secure or insecure connection to the server. */
  insecure_api?: boolean;
  /** The minimum amount of memory you wish to reserve for this system. */
  mempol?: number;
  /** The name of the VM. */
  name?: string;
  /** The operating system option in RHEV/oVirt. */
  osver?: string;
  /** The password for user authentication. */
  password: string;
  /** The port on which the API is reachable. */
  port?: number;
  /** The name/IP of your RHEV-m/oVirt instance. */
  server?: string;
  /** This serves to create/remove/update or powermanage your VM. */
  state?: "absent" | "cd" | "down" | "info" | "ping" | "present" | "restarted" | "up";
  /** The timeout you wish to define for power actions. */
  timeout?: number;
  /** To define if the VM is a server or desktop. */
  type?: "desktop" | "host" | "server";
  /** The user to authenticate with. */
  user?: string;
  /** To make your VM High Available. */
  vm_ha?: boolean;
  /** The number of CPUs you want in your VM. */
  vmcpu?: number;
  /** The host you wish your VM to run on. */
  vmhost?: string;
  /** The amount of memory you want your VM to use (in GB). */
  vmmem?: number;
}

export interface RhevmReturn {
  /** Returns all of the VMs variables and execution. */
  vm?: Record<string, unknown>;
}
export const rhevm = defineRemoteModule<RhevmArgs, RhevmReturn>(spec, meta);
