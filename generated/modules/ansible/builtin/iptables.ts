import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.iptables
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.iptables",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.iptables",
  moduleFqn: "ansible.modules.iptables",
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
      "ansible/module_utils/compat/version.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
      "ansible/modules/iptables.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible/modules/__init__.py",
  ],
} as const;
export interface IptablesArgs {
  /** Whether the rule should be appended at the bottom or inserted at the top. */
  action?: "append" | "insert";
  /** Specify the iptables chain to modify. */
  chain?: string;
  /** If V(true) and O(state) is V(present), the chain will be created if needed. */
  chain_management?: boolean;
  /** This specifies a comment that will be added to the rule. */
  comment?: string;
  /** A list of the connection states to match in the conntrack module. */
  ctstate?: string | string[];
  /** Destination specification. */
  destination?: string;
  /** Destination port or port range specification. This can either be a service name or a port number. An inclusive range can also be specified, using the format first:last. If the first port is omitted, '0' is assumed; if the last is omitted, '65535' is assumed. If the first port is greater than the second one they will be swapped. This is only valid if the rule also specifies one of the following protocols: tcp, udp, dccp or sctp. */
  destination_port?: string;
  /** This specifies multiple destination port numbers or port ranges to match in the multiport module. */
  destination_ports?: string | string[];
  /** Specifies the destination IP range to match in the iprange module. */
  dst_range?: string;
  /** Flushes the specified table and chain of all rules. */
  flush?: boolean;
  /** This means that the rule only refers to second and further fragments of fragmented packets. */
  fragment?: string;
  /** This specifies the IP address of the host to send the cloned packets. */
  gateway?: string;
  /** Specifies the GID or group to use in the match by owner rule. */
  gid_owner?: string;
  /** This specifies that the processing should continue in a user-specified chain. */
  goto?: string;
  /** This allows specification of the ICMP type, which can be a numeric ICMP type, type/code pair, or one of the ICMP type names shown by the command C(iptables -p icmp -h). */
  icmp_type?: string;
  /** Name of an interface via which a packet was received (only for packets entering the V(INPUT), V(FORWARD) and V(PREROUTING) chains). */
  in_interface?: string;
  /** Which version of the IP protocol this rule should apply to. */
  ip_version?: "ipv4" | "ipv6" | "both";
  /** This specifies the target of the rule; i.e., what to do if the packet matches it. */
  jump?: string;
  /** Specifies the maximum average number of matches to allow per second. */
  limit?: string;
  /** Specifies the maximum burst before the above limit kicks in. */
  limit_burst?: string;
  /** Logging level according to the syslogd-defined priorities. */
  log_level?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "emerg"
    | "alert"
    | "crit"
    | "error"
    | "warning"
    | "notice"
    | "info"
    | "debug";
  /** Specifies a log text for the rule. Only makes sense with a LOG jump. */
  log_prefix?: string;
  /** Specifies a match to use, that is, an extension module that tests for a specific property. */
  match?: string | string[];
  /** Specifies a set name that can be defined by ipset. */
  match_set?: string;
  /** Specifies the necessary flags for the match_set parameter. */
  match_set_flags?: "src" | "dst" | "src,dst" | "dst,src" | "dst,dst" | "src,src";
  /** This parameter controls the running of the list -action of iptables, which is used internally by the module. */
  numeric?: boolean;
  /** Name of an interface via which a packet is going to be sent (for packets entering the V(FORWARD), V(OUTPUT) and V(POSTROUTING) chains). */
  out_interface?: string;
  /** Set the policy for the chain to the given target. */
  policy?: "ACCEPT" | "DROP" | "QUEUE" | "RETURN";
  /** The protocol of the rule or of the packet to check. */
  protocol?: string;
  /** Specifies the error packet type to return while rejecting. It implies C(jump=REJECT). */
  reject_with?: string;
  /** Insert the rule as the given rule number. */
  rule_num?: string;
  /** This enables the administrator to initialize the packet and byte counters of a rule (during V(INSERT), V(APPEND), V(REPLACE) operations). */
  set_counters?: string;
  /** This allows specifying a DSCP mark to be added to packets. It takes either an integer or hex value. */
  set_dscp_mark?: string;
  /** This allows specifying a predefined DiffServ class which will be translated to the corresponding DSCP mark. */
  set_dscp_mark_class?: string;
  /** Source specification. */
  source?: string;
  /** Source port or port range specification. */
  source_port?: string;
  /** Specifies the source IP range to match the iprange module. */
  src_range?: string;
  /** Whether the rule should be absent or present. */
  state?: "absent" | "present";
  /** This allows matching packets that have the SYN bit set and the ACK and RST bits unset. */
  syn?: "ignore" | "match" | "negate";
  /** This option specifies the packet matching table on which the command should operate. */
  table?: "filter" | "nat" | "mangle" | "raw" | "security";
  /** TCP flags specification. */
  tcp_flags?: { flags?: string | string[]; flags_set?: string | string[] };
  /** This specifies a destination address to use with O(ctstate=DNAT). */
  to_destination?: string;
  /** This specifies a destination port or range of ports to use, without this, the destination port is never altered. */
  to_ports?: string;
  /** This specifies a source address to use with O(ctstate=SNAT). */
  to_source?: string;
  /** Specifies the UID or username to use in the match by owner rule. */
  uid_owner?: string;
  /** Wait N seconds for the xtables lock to prevent multiple instances of the program from running concurrently. */
  wait?: string;
}

export type IptablesReturn = Record<string, unknown>;
export const iptables = defineRemoteModule<IptablesArgs, IptablesReturn>(spec, meta);
