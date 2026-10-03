import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityDocker, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.docker.docker_stack
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.docker.docker_stack",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.docker.docker_stack",
  moduleFqn: "ansible_collections.community.docker.plugins.modules.docker_stack",
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
    ],
  }, {
    artifact: communityDocker,
    files: [
      "plugins/module_utils/_api/_import_helper.py",
      "plugins/module_utils/_api/api/client.py",
      "plugins/module_utils/_api/auth.py",
      "plugins/module_utils/_api/constants.py",
      "plugins/module_utils/_api/credentials/constants.py",
      "plugins/module_utils/_api/credentials/errors.py",
      "plugins/module_utils/_api/credentials/store.py",
      "plugins/module_utils/_api/credentials/utils.py",
      "plugins/module_utils/_api/errors.py",
      "plugins/module_utils/_api/tls.py",
      "plugins/module_utils/_api/transport/basehttpadapter.py",
      "plugins/module_utils/_api/transport/npipeconn.py",
      "plugins/module_utils/_api/transport/npipesocket.py",
      "plugins/module_utils/_api/transport/sshconn.py",
      "plugins/module_utils/_api/transport/ssladapter.py",
      "plugins/module_utils/_api/transport/unixconn.py",
      "plugins/module_utils/_api/utils/config.py",
      "plugins/module_utils/_api/utils/decorators.py",
      "plugins/module_utils/_api/utils/json_stream.py",
      "plugins/module_utils/_api/utils/proxy.py",
      "plugins/module_utils/_api/utils/socket.py",
      "plugins/module_utils/_api/utils/utils.py",
      "plugins/module_utils/_common.py",
      "plugins/module_utils/_common_api.py",
      "plugins/module_utils/_common_cli.py",
      "plugins/module_utils/_socket_helper.py",
      "plugins/module_utils/_util.py",
      "plugins/module_utils/_version.py",
      "plugins/modules/docker_stack.py",
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
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/docker/__init__.py",
    "ansible_collections/community/docker/plugins/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/api/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/credentials/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/transport/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/utils/__init__.py",
    "ansible_collections/community/docker/plugins/modules/__init__.py",
  ],
} as const;
export interface DockerStackArgs {
  /** If larger than V(0) and O(state=absent) the module will retry up to O(absent_retries) times to delete the stack until all the resources have been effectively deleted. If the last try still reports the stack as not completely removed the module will fail. */
  absent_retries?: number;
  /** Interval in seconds between consecutive O(absent_retries). */
  absent_retries_interval?: number;
  /** The version of the Docker API running on the Docker Host. */
  api_version?: string;
  /** Use a CA certificate when performing server verification by providing the path to a CA certificate file. */
  ca_path?: string;
  /** The Docker CLI context to use. */
  cli_context?: string;
  /** Path to the client's TLS certificate file. */
  client_cert?: string;
  /** Path to the client's TLS key file. */
  client_key?: string;
  /** List of compose definitions. Any element may be a string referring to the path of the compose file on the target host or the YAML contents of a compose file nested as dictionary. */
  compose?: unknown | unknown[];
  /** If V(false), the C(--detach=false) option is added to the C(docker stack deploy) command, allowing Docker to wait for tasks to converge before exiting. */
  detach?: boolean;
  /** Path to the Docker CLI. If not provided, will search for Docker CLI on the E(PATH). */
  docker_cli?: string;
  /** The URL or Unix socket path used to connect to the Docker API. To connect to a remote host, provide the TCP connection string. For example, V(tcp://192.0.2.23:2376). If TLS is used to encrypt the connection, the module will automatically replace C(tcp) in the connection URL with C(https). */
  docker_host?: string;
  /** Stack name. */
  name: string;
  /** If true will add the C(--prune) option to the C(docker stack deploy) command. This will have docker remove the services not present in the current stack definition. */
  prune?: boolean;
  /** If set will add the C(--resolve-image) option to the C(docker stack deploy) command. This will have docker query the registry to resolve image digest and supported platforms. If not set, docker use "always" by default. */
  resolve_image?: "always" | "changed" | "never";
  /** Service state. */
  state?: "present" | "absent";
  /** Secure the connection to the API by using TLS without verifying the authenticity of the Docker host server. Note that if O(validate_certs) is set to V(true) as well, it will take precedence. */
  tls?: boolean;
  /** When verifying the authenticity of the Docker Host server, provide the expected name of the server. */
  tls_hostname?: string;
  /** Secure the connection to the API by using TLS and verifying the authenticity of the Docker host server. */
  validate_certs?: boolean;
  /** If true will add the C(--with-registry-auth) option to the C(docker stack deploy) command. This will have docker send registry authentication details to Swarm agents. */
  with_registry_auth?: boolean;
}

export interface DockerStackReturn {
  /** Dictionary containing the differences between the 'Spec' field
of the stack services before and after applying the new stack
definition. */
  stack_spec_diff?: Record<string, unknown>;
}
export const docker_stack = defineRemoteModule<DockerStackArgs, DockerStackReturn>(spec, meta);
