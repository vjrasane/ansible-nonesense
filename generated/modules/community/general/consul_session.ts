import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.consul_session
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.consul_session",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.consul_session",
  moduleFqn: "ansible_collections.community.general.plugins.modules.consul_session",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_consul.py", "plugins/modules/consul_session.py"] }],
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
export interface ConsulSessionArgs {
  /** The optional behavior that can be attached to the session when it is created. This controls the behavior when a session is invalidated. */
  behavior?: "delete" | "release";
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Checks that are used to verify the session health. If all the checks fail, the session is invalidated and any locks associated with the session are released and can be acquired once the associated lock delay has expired. */
  checks?: string | string[];
  /** The name of the datacenter in which the session exists or should be created. */
  datacenter?: string;
  /** The optional lock delay that can be attached to the session when it is created. Locks for invalidated sessions ar blocked from being acquired until this delay has expired. Durations are in seconds. */
  delay?: number;
  /** Host of the Consul agent. */
  host?: string;
  /** ID of the session, required when O(state) is either V(info) or V(remove). */
  id?: string;
  /** The name that should be associated with the session. Required when O(state=node) is used. */
  name?: string;
  /** The name of the node that with which the session is associated. By default this is the name of the agent. */
  node?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** Whether the session should be present, in other words it should be created if it does not exist, or absent, removed if present. If created, the O(id) for the session is returned in the output. If V(absent), O(id) is required to remove the session. Info for a single session, all the sessions for a node or all available sessions can be retrieved by specifying V(info), V(node) or V(list) for the O(state); for V(node) or V(info), the node O(name) or session O(id) is required as parameter. */
  state?: "absent" | "info" | "list" | "node" | "present";
  /** The token to use for authorization. */
  token?: string;
  /** Specifies the duration of a session in seconds (between 10 and 86400). */
  ttl?: number;
  /** The address of the Consul agent, in the V(host:port) or V(scheme://host:port) form. The scheme and the port are optional, the host is not. */
  url?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export type ConsulSessionReturn = Record<string, unknown>;
export const consul_session = defineRemoteModule<ConsulSessionArgs, ConsulSessionReturn>(spec, meta);
