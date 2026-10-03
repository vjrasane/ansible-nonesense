import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.consul_agent_service
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.consul_agent_service",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.consul_agent_service",
  moduleFqn: "ansible_collections.community.general.plugins.modules.consul_agent_service",
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
    files: ["plugins/module_utils/_consul.py", "plugins/modules/consul_agent_service.py"],
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
export interface ConsulAgentServiceArgs {
  /** The address to advertise that the service listens on. This value is passed as the C(address) parameter to Consul's C(/v1/agent/service/register) API method, so refer to the Consul API documentation for further details. */
  address?: string;
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Specifies to disable the anti-entropy feature for this service's tags. If C(EnableTagOverride) is set to true then external agents can update this service in the catalog and modify the tags. */
  enable_tag_override?: boolean;
  /** Host of the Consul agent. */
  host?: string;
  /** Specifies a unique ID for this service. This must be unique per agent. This defaults to the O(name) parameter if not provided. If O(state=absent), defaults to the service name if supplied. */
  id?: string;
  /** Optional meta data used for filtering. For keys, the characters C(A-Z), C(a-z), C(0-9), C(_), C(-) are allowed. Not allowed characters are replaced with underscores. */
  meta?: Record<string, unknown>;
  /** Unique name for the service on a node, must be unique per node, required if registering a service. */
  name?: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** The port on which the service is listening. Can optionally be supplied for registration of a service, that is if O(name) or O(id) is set. */
  service_port?: number;
  /** Whether the service should be present or absent. */
  state?: "present" | "absent";
  /** Tags that are attached to the service registration. */
  tags?: string | string[];
  /** The token to use for authorization. */
  token?: string;
  /** The address of the Consul agent, in the V(host:port) or V(scheme://host:port) form. The scheme and the port are optional, the host is not. */
  url?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
  /** Specifies weights for the service. */
  weights?: { passing?: number; warning?: number };
}

export interface ConsulAgentServiceReturn {
  /** The operation performed. */
  operation?: string;
  /** The service as returned by the Consul HTTP API. */
  service?: Record<string, unknown>;
}
export const consul_agent_service = defineRemoteModule<ConsulAgentServiceArgs, ConsulAgentServiceReturn>(spec, meta);
