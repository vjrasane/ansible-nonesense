import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.consul_kv
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.consul_kv",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.consul_kv",
  moduleFqn: "ansible_collections.community.general.plugins.modules.consul_kv",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_consul.py", "plugins/modules/consul_kv.py"] }],
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
export interface ConsulKvArgs {
  /** The CA bundle to use for https connections. */
  ca_path?: string;
  /** Used when acquiring a lock with a session. If the O(cas) is V(0), then Consul only puts the key if it does not already exist. If the O(cas) value is non-zero, then the key is only set if the index matches the ModifyIndex of that key. */
  cas?: string;
  /** The name of the datacenter to query. If unspecified, the query defaults to the datacenter of the Consul agent on O(host). */
  datacenter?: string;
  /** Opaque positive integer value that can be passed when setting a value. */
  flags?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** The key at which the value should be stored. */
  key: string;
  /** The port on which the consul agent is running. */
  port?: number;
  /** If the key represents a prefix, each entry with the prefix can be retrieved by setting this to V(true). */
  recurse?: boolean;
  /** If the O(state) is V(present) and O(value) is set, perform a read after setting the value and return this value. */
  retrieve?: boolean;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** The session that should be used to acquire or release a lock associated with a key/value pair. */
  session?: string;
  /** The action to take with the supplied key and value. If the state is V(present) and O(value) is set, the key contents is set to the value supplied and RV(ignore:changed) is set to V(true) only if the value was different to the current contents. If the state is V(present) and O(value) is not set, the existing value associated to the key is returned. This behavior will be B(deprecated) in the future. Use M(community.general.consul_kv_info) to read key/value entries instead. The state V(absent) is used to remove the key/value pair, again RV(ignore:changed) is set to V(true) only if the key actually existed prior to the removal. An attempt can be made to obtain or free the lock associated with a key/value pair with the states V(acquire) or V(release) respectively. A valid session must be supplied to make the attempt RV(ignore:changed) is V(true) if the attempt is successful, V(false) otherwise. */
  state?: "absent" | "acquire" | "present" | "release";
  /** The token to use for authorization. */
  token?: string;
  /** The address of the Consul agent, in the V(host:port) or V(scheme://host:port) form. The scheme and the port are optional, the host is not. */
  url?: string;
  /** Whether to verify the TLS certificate of the Consul agent. */
  validate_certs?: boolean;
  /** The value should be associated with the given key, required if O(state) is V(present). */
  value?: string;
}

export type ConsulKvReturn = Record<string, unknown>;
export const consul_kv = defineRemoteModule<ConsulKvArgs, ConsulKvReturn>(spec, meta);
