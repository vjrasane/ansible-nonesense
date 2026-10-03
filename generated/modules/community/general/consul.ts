import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.consul
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.consul",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.consul",
  moduleFqn: "ansible_collections.community.general.plugins.modules.consul",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/consul.py"] }],
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
export interface ConsulArgs {
  /** Host name. */
  check_host?: string;
  /** An ID for the service check. If O(state=absent), defaults to O(check_name). Ignored if part of a service definition. */
  check_id?: string;
  /** Name for the service check. Required if standalone, ignored if part of service definition. */
  check_name?: string;
  /** Node name. */
  check_node?: string;
  /** Host of the Consul agent defaults to localhost. */
  host?: string;
  /** Checks can be registered with an HTTP endpoint. This means that Consul checks that the http endpoint returns a successful HTTP status. */
  http?: string;
  /** The interval at which the service check is run. This is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is V(10s). */
  interval?: string;
  /** Notes to attach to check when registering it. */
  notes?: string;
  /** The port on which the Consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** The script/command that is run periodically to check the health of the service. */
  script?: string;
  /** The address to advertise that the service is listening on. This value is passed as the C(address) parameter to Consul's C(/v1/agent/service/register) API method, so refer to the Consul API documentation for further details. */
  service_address?: string;
  /** The ID for the service, must be unique per node. If O(state=absent), defaults to the service name if supplied. */
  service_id?: string;
  /** Unique name for the service on a node, must be unique per node, required if registering a service. May be omitted if registering a node level check. */
  service_name?: string;
  /** The port on which the service is listening. Can optionally be supplied for registration of a service, that is if O(service_name) or O(service_id) is set. */
  service_port?: number;
  /** Register or deregister the Consul service, defaults to present. */
  state?: "present" | "absent";
  /** Tags that are attached to the service registration. */
  tags?: string | string[];
  /** Checks can be registered with a TCP port. This means that Consul checks if the connection attempt to that port is successful (that is, the port is currently accepting connections). The format is V(host:port), for example V(localhost:80). */
  tcp?: string;
  /** A custom HTTP check timeout. The Consul default is 10 seconds. Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  timeout?: string;
  /** The token key identifying an ACL rule set. May be required to register services. */
  token?: string;
  /** Checks can be registered with a TTL instead of a O(script) and O(interval) this means that the service checks in with the agent before the TTL expires. If it does not the check is considered failed. Required if registering a check and the script an interval are missing Similar to the interval this is a number with a V(s) or V(m) suffix to signify the units of seconds or minutes, for example V(15s) or V(1m). If no suffix is supplied V(s) is used by default, for example V(10) is equivalent to V(10s). */
  ttl?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
}

export type ConsulReturn = Record<string, unknown>;
export const consul = defineRemoteModule<ConsulArgs, ConsulReturn>(spec, meta);
