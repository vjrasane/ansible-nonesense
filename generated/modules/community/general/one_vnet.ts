import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.one_vnet
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.one_vnet",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "partial",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.one_vnet",
  moduleFqn: "ansible_collections.community.general.plugins.modules.one_vnet",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_opennebula.py", "plugins/modules/one_vnet.py"] }],
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
export interface OneVnetArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** A O(id) of the network you would like to manage. */
  id?: number;
  /** A O(name) of the network you would like to manage. If a network with the given name does not exist it, then is created, otherwise it is managed by this module. */
  name?: string;
  /** V(present) - state that is used to manage the network. */
  state?: "present" | "absent";
  /** A string containing the network template contents. */
  template?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Time to wait for the desired state to be reached before timeout, in seconds. */
  wait_timeout?: number;
}

export interface OneVnetReturn {
  /** The network's list of ar_pool. */
  ar_pool?: string | string[];
  /** The network's bridge interface. */
  bridge?: string;
  /** The network's bridge type. */
  bridge_type?: string;
  /** The network's clusters. */
  clusters?: string | string[];
  /** The network's group ID. */
  group_id?: number;
  /** The network's group name. */
  group_name?: string;
  /** The network ID. */
  id?: number;
  /** The network name. */
  name?: string;
  /** The network's outer VLAN tag. */
  outer_vlan_id?: number;
  /** The network's owner ID. */
  owner_id?: number;
  /** The network's owner name. */
  owner_name?: string;
  /** The network's parent network ID. */
  parent_network_id?: number;
  /** The network's permissions. */
  permissions?: Record<string, unknown>;
  /** The network's physical device (NIC). */
  phydev?: string;
  /** The parsed network template. */
  template?: Record<string, unknown>;
  /** The network's user name. */
  user_id?: number;
  /** The network's user ID. */
  user_name?: string;
  /** The network's VLAN tag. */
  vlan_id?: number;
  /** The network's VN_MAD. */
  vn_mad?: string;
  /** The network's list of virtual routers IDs. */
  vrouters?: string | string[];
}
export const one_vnet = defineRemoteModule<OneVnetArgs, OneVnetReturn>(spec, meta);
