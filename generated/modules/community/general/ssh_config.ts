import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ssh_config
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ssh_config",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ssh_config",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ssh_config",
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
    files: ["plugins/module_utils/_ssh.py", "plugins/module_utils/_stormssh.py", "plugins/modules/ssh_config.py"],
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
export interface SshConfigArgs {
  /** Sets the C(AddKeysToAgent) option. */
  add_keys_to_agent?: boolean;
  /** Sets the C(AddressFamily) option. */
  address_family?: "any" | "inet" | "inet6";
  /** Sets the C(ControlMaster) option. */
  controlmaster?: "yes" | "no" | "ask" | "auto" | "autoask";
  /** Sets the C(ControlPath) option. */
  controlpath?: string;
  /** Sets the C(ControlPersist) option. */
  controlpersist?: string;
  /** Sets the C(DynamicForward) option. */
  dynamicforward?: string;
  /** Sets the C(ForwardAgent) option. */
  forward_agent?: boolean;
  /** Which group this configuration file belongs to. */
  group?: string;
  /** The endpoint this configuration is valid for. */
  host: string;
  /** Sets the C(HostKeyAlgorithms) option. */
  host_key_algorithms?: string;
  /** The actual host to connect to when connecting to the host defined. */
  hostname?: string;
  /** Specifies that SSH should only use the configured authentication identity and certificate files (either the default files, or those explicitly configured in the C(ssh_config) files or passed on the ssh command-line), even if C(ssh-agent) or a C(PKCS11Provider) or C(SecurityKeyProvider) offers more identities. */
  identities_only?: boolean;
  /** The path to an identity file (SSH private key) that is used when connecting to this host. */
  identity_file?: string;
  /** Allows specifying arbitrary SSH config entry options using a dictionary. */
  other_options?: Record<string, unknown>;
  /** The actual port to connect to when connecting to the host defined. */
  port?: string;
  /** Sets the C(ProxyCommand) option. */
  proxycommand?: string;
  /** Sets the C(ProxyJump) option. */
  proxyjump?: string;
  /** Specifies the user to log in as. */
  remote_user?: string;
  /** SSH config file. */
  ssh_config_file?: string;
  /** Whether a host entry should exist or not. */
  state?: "present" | "absent";
  /** Whether to strictly check the host key when doing connections to the remote host. */
  strict_host_key_checking?: "yes" | "no" | "ask" | "accept-new";
  /** Which user account this configuration file belongs to. */
  user?: string;
  /** Sets the user known hosts file option. */
  user_known_hosts_file?: string;
}

export interface SshConfigReturn {
  /** A list of host added. */
  hosts_added?: string | string[];
  /** A list of host diff changes. */
  hosts_change_diff?: string | string[];
  /** A list of host changed. */
  hosts_changed?: string | string[];
  /** A list of host removed. */
  hosts_removed?: string | string[];
}
export const ssh_config = defineRemoteModule<SshConfigArgs, SshConfigReturn>(spec, meta);
