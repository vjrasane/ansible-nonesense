import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.lxd_container
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.lxd_container",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.lxd_container",
  moduleFqn: "ansible_collections.community.general.plugins.modules.lxd_container",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_lxd.py", "plugins/modules/lxd_container.py"] }],
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
export interface LxdContainerArgs {
  /** The architecture for the instance (for example V(x86_64) or V(i686)). */
  architecture?: string;
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** The config for the instance (for example V({"limits.cpu": "2"})). */
  config?: Record<string, unknown>;
  /** The devices for the instance (for example V({ "rootfs": { "path": "/dev/kvm", "type": "unix-char" }})). */
  devices?: Record<string, unknown>;
  /** Whether or not the instance is ephemeral (for example V(true) or V(false)). */
  ephemeral?: boolean;
  /** If this is V(true), the C(lxd_container) forces to stop the instance when it stops or restarts the instance. */
  force_stop?: boolean;
  /** If set to V(true), options starting with C(volatile.) are ignored. As a result, they are reapplied for each execution. */
  ignore_volatile_options?: boolean;
  /** Name of an instance. */
  name: string;
  /** Profile to be used by the instance. */
  profiles?: string | string[];
  /** Project of an instance. */
  project?: string;
  /** The unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** The source for the instance (for example V({ "type": "image", "mode": "pull", "server": "https://cloud-images.ubuntu.com/releases/", "protocol": "simplestreams", "alias": "22.04" })). */
  source?: Record<string, unknown>;
  /** Define the state of an instance. */
  state?: "started" | "stopped" | "restarted" | "absent" | "frozen";
  /** For cluster deployments. It attempts to create an instance on a target node. If the instance exists elsewhere in a cluster, then it is not replaced nor moved. The name should respond to same name of the node you see in C(lxc cluster list). */
  target?: string;
  /** A timeout for changing the state of the instance. */
  timeout?: number;
  /** The client trusted password. */
  trust_password?: string;
  /** Instance type can be either V(virtual-machine) or V(container). */
  type?: "container" | "virtual-machine";
  /** The unix domain socket path or the https URL for the LXD server. */
  url?: string;
  /** If set to V(true), the tasks wait until the task reports a success status when performing container operations. */
  wait_for_container?: boolean;
  /** If this is V(true), the C(lxd_container) waits until IPv4 addresses are set to the all network interfaces in the instance after starting or restarting. */
  wait_for_ipv4_addresses?: boolean;
}

export interface LxdContainerReturn {
  /** List of actions performed for the instance. */
  actions?: string | string[];
  /** Mapping from the network device name to a list of IPv4 addresses in the instance. */
  addresses?: Record<string, unknown>;
  /** The logs of requests and responses. */
  logs?: string | string[];
  /** The old state of the instance. */
  old_state?: string;
}
export const lxd_container = defineRemoteModule<LxdContainerArgs, LxdContainerReturn>(spec, meta);
