import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, ansiblePosix, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.posix.firewalld
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.posix.firewalld",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.posix.firewalld",
  moduleFqn: "ansible_collections.ansible.posix.plugins.modules.firewalld",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn_wrapper.py",
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
      "ansible/module_utils/common/respawn.py",
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
    artifact: ansiblePosix,
    files: [
      "plugins/module_utils/_respawn.py",
      "plugins/module_utils/_version.py",
      "plugins/module_utils/firewalld.py",
      "plugins/module_utils/version.py",
      "plugins/modules/firewalld.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/ansible/__init__.py",
    "ansible_collections/ansible/posix/__init__.py",
    "ansible_collections/ansible/posix/plugins/__init__.py",
    "ansible_collections/ansible/posix/plugins/module_utils/__init__.py",
    "ansible_collections/ansible/posix/plugins/modules/__init__.py",
  ],
} as const;
export interface FirewalldArgs {
  /** The forward setting you would like to enable/disable to/from zones within firewalld. */
  forward?: boolean;
  /** The ICMP block you would like to add/remove to/from a zone in firewalld. */
  icmp_block?: string;
  /** Enable/Disable inversion of ICMP blocks for a zone in firewalld. */
  icmp_block_inversion?: boolean;
  /** Whether to apply this change to the runtime firewalld configuration. */
  immediate?: boolean;
  /** The interface you would like to add/remove to/from a zone in firewalld. */
  interface?: string;
  /** The masquerade setting you would like to enable/disable to/from zones within firewalld. */
  masquerade?: boolean;
  /** Ignores O(immediate) if O(permanent=true) and firewalld is not running. */
  offline?: boolean;
  /** Whether to apply this change to the permanent firewalld configuration. */
  permanent?: boolean;
  /** Name of a port or port range to add/remove to/from firewalld. */
  port?: string;
  /** Port and protocol to forward using firewalld. */
  port_forward?: Record<string, unknown> | Record<string, unknown>[];
  /** Name of a protocol to add/remove to/from firewalld. */
  protocol?: string;
  /** Rich rule to add/remove to/from firewalld. */
  rich_rule?: string;
  /** Name of a service to add/remove to/from firewalld. */
  service?: string;
  /** The source/network you would like to add/remove to/from firewalld. */
  source?: string;
  /** Enable or disable a setting. */
  state: "absent" | "disabled" | "enabled" | "present";
  /** firewalld Zone target. */
  target?: "default" | "ACCEPT" | "DROP" | "%%REJECT%%";
  /** The amount of time in seconds the rule should be in effect for when non-permanent. */
  timeout?: number;
  /** The firewalld zone to add/remove to/from. */
  zone?: string;
}

export type FirewalldReturn = Record<string, unknown>;
export const firewalld = defineRemoteModule<FirewalldArgs, FirewalldReturn>(spec, meta);
