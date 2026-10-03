import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ufw
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ufw",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ufw",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ufw",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/ufw.py"] }],
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
export interface UfwArgs {
  /** Add a comment to the rule. Requires UFW version >=0.35. */
  comment?: string;
  /** Change the default policy for incoming or outgoing traffic. */
  default?: "allow" | "deny" | "reject";
  /** Delete rule. */
  delete?: boolean;
  /** Select direction for a rule or default policy command. Mutually exclusive with O(interface_in) and O(interface_out). */
  direction?: "in" | "incoming" | "out" | "outgoing" | "routed";
  /** Source IP address. */
  from_ip?: string;
  /** Source port. */
  from_port?: string;
  /** Insert the corresponding rule as rule number NUM. */
  insert?: number;
  /** Allows to interpret the index in O(insert) relative to a position. */
  insert_relative_to?: "first-ipv4" | "first-ipv6" | "last-ipv4" | "last-ipv6" | "zero";
  /** Specify interface for the rule. The direction (in or out) used for the interface depends on the value of O(direction). See O(interface_in) and O(interface_out) for routed rules that needs to supply both an input and output interface. Mutually exclusive with O(interface_in) and O(interface_out). */
  interface?: string;
  /** Specify input interface for the rule. This is mutually exclusive with O(direction) and O(interface). However, it is compatible with O(interface_out) for routed rules. */
  interface_in?: string;
  /** Specify output interface for the rule. This is mutually exclusive with O(direction) and O(interface). However, it is compatible with O(interface_in) for routed rules. */
  interface_out?: string;
  /** Log new connections matched to this rule. */
  log?: boolean;
  /** Toggles logging. Logged packets use the LOG_KERN syslog facility. */
  logging?: "on" | "off" | "low" | "medium" | "high" | "full";
  /** Use profile located in C(/etc/ufw/applications.d). */
  name?: string;
  /** TCP/IP protocol. */
  proto?: "any" | "tcp" | "udp" | "ipv6" | "esp" | "ah" | "gre" | "igmp" | "vrrp";
  /** Apply the rule to routed/forwarded packets. */
  route?: boolean;
  /** Add firewall rule. */
  rule?: "allow" | "deny" | "limit" | "reject";
  /** V(enabled) reloads firewall and enables firewall on boot. */
  state?: "disabled" | "enabled" | "reloaded" | "reset";
  /** Destination IP address. */
  to_ip?: string;
  /** Destination port. */
  to_port?: string;
}

export type UfwReturn = Record<string, unknown>;
export const ufw = defineRemoteModule<UfwArgs, UfwReturn>(spec, meta);
