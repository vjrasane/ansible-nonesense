import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.consul_agent_check
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.consul_agent_check",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.consul_agent_check",
  moduleFqn: "ansible_collections.community.general.plugins.modules.consul_agent_check",
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
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_consul.py", "plugins/modules/consul_agent_check.py"],
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
export interface ConsulAgentCheckArgs {
  /** Specifies command arguments to run to update the status of the check. */
  args?: string | string[];
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** Checks can be registered with an HTTP endpoint. This means that Consul checks that the HTTP endpoint returns a successful HTTP status. */
  http?: string;
  /** Specifies a unique ID for this check on the node. This defaults to the O(name) parameter, but it may be necessary to provide an ID for uniqueness. This value is returned in the response as V(CheckId). */
  id?: string;
  /** The interval at which the service check is run. This is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  interval?: string;
  /** Required name for the service check. */
  name?: string;
  /** Notes to attach to check when registering it. */
  notes?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** The ID for the service, must be unique per node. If O(state=absent), defaults to the service name if supplied. */
  service_id?: string;
  /** Whether the check should be present or absent. */
  state?: "present" | "absent";
  /** Checks can be registered with a TCP port. This means that Consul will check if the connection attempt to that port is successful (that is, the port is currently accepting connections). The format is V(host:port), for example V(localhost:80). */
  tcp?: string;
  /** A custom HTTP check timeout. The Consul default is 10 seconds. Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  timeout?: string;
  /** The token to use for authorization. */
  token?: string;
  /** Checks can be registered with a TTL instead of a O(args) and O(interval) this means that the service checks in with the agent before the TTL expires. If it does not the check is considered failed. Required if registering a check and the script an interval are missing Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  ttl?: string;
  /** The address of the Consul agent, in the V(host:port) or V(scheme://host:port) form. The scheme and the port are optional, the host is not. */
  url?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export interface ConsulAgentCheckReturn {
  /** The check as returned by the Consul HTTP API. */
  check?: Record<string, unknown>;
  /** The operation performed. */
  operation?: string;
}
export const consul_agent_check = defineRemoteModule<ConsulAgentCheckArgs, ConsulAgentCheckReturn>(spec, meta);
