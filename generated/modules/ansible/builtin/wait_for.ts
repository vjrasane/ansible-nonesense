import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.wait_for
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.wait_for",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.wait_for",
  moduleFqn: "ansible.modules.wait_for",
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
      "ansible/modules/wait_for.py",
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
export interface WaitForArgs {
  /** The list of TCP connection states which are counted as active connections. */
  active_connection_states?: string | string[];
  /** Maximum number of seconds to wait for a connection to happen before closing and retrying. */
  connect_timeout?: number;
  /** Number of seconds to wait before starting to poll. */
  delay?: number;
  /** List of hosts or IPs to ignore when looking for active TCP connections for V(drained) state. */
  exclude_hosts?: string | string[];
  /** A resolvable hostname or IP address to wait for. */
  host?: string;
  /** This overrides the normal error message from a failure to meet the required conditions. */
  msg?: string;
  /** Path to a file on the filesystem that must exist before continuing. */
  path?: string;
  /** Port number to poll. */
  port?: number;
  /** Can be used to match a string in either a file or a socket connection. */
  search_regex?: string;
  /** Number of seconds to sleep between checks. */
  sleep?: number;
  /** Either V(present), V(started), or V(stopped), V(absent), or V(drained). */
  state?: "absent" | "drained" | "present" | "started" | "stopped";
  /** Maximum number of seconds to wait for, when used with another condition it will force an error. */
  timeout?: number;
}

export interface WaitForReturn {
  /** The number of seconds that elapsed while waiting */
  elapsed?: number;
  /** Dictionary containing all the named subgroups of the match, keyed by the subgroup name, as returned by U(https://docs.python.org/3/library/re.html#re.MatchObject.groupdict) */
  match_groupdict?: Record<string, unknown>;
  /** Tuple containing all the subgroups of the match as returned by U(https://docs.python.org/3/library/re.html#re.MatchObject.groups) */
  match_groups?: string | string[];
}
export const wait_for = defineRemoteModule<WaitForArgs, WaitForReturn>(spec, meta);
